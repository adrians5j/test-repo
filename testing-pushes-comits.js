#!/usr/bin/env node
const { red, green } = require("chalk");
const argv = require("yargs").argv;
const inquirer = require("inquirer");
const fetch = require("node-fetch");
const { Octokit } = require("@octokit/rest");
const semver = require("semver");
const open = require("open");

const NEW_TOKEN_URL =
    "https://github.com/settings/tokens/new?scopes=public_repo&description=prepare-webiny-relase-notes";

(async () => {
    const response = await fetch("https://registry.npmjs.org/@webiny/cli");
    const json = await response.json();
    const fromVersion = json["dist-tags"].latest;
    const toVersion = semver.inc(fromVersion, "minor");

    const args = {
        interactive: argv.interactive || true,
        fromVersion: argv.fromVersion || fromVersion,
        toVersion: argv.toVersion || toVersion,
        ghToken: process.env.GH_TOKEN || argv.ghToken
    };

    if (args.interactive) {
        const questions = [
            {
                name: "fromVersion",
                default: fromVersion,
                message: "Please type latest (currently released) version:"
            },
            {
                name: "toVersion",
                default: toVersion,
                message: "Please type new (to be released) version:"
            }
        ];

        if (!args.ghToken) {
            questions.push(
                {
                    name: "githubAccessTokenCreate",
                    message: () => {
                        return `In order to proceed, you will need a GitHub personal access token. Do you want to create a new one?`;
                    },
                    type: "list",
                    default: true,
                    choices: async () => {
                        return [
                            {
                                name: "No, I already have my GitHub personal access token",
                                value: false
                            },
                            {
                                name: "Yes, I want to create a new GitHub personal access token",
                                value: true
                            }
                        ];
                    }
                },
                {
                    name: "ghToken",
                    type: "password",
                    message: () => {
                        return `Your GitHub personal access token:`;
                    },
                    required: true,
                    when: answers => {
                        answers.githubAccessTokenCreate && open(NEW_TOKEN_URL);
                        return true;
                    },
                    validate: async answer => {
                        const octokit = new Octokit({ auth: answer });

                        try {
                            await octokit.rest.users.getAuthenticated();
                        } catch (e) {
                            return "Invalid GitHub personal access token provided.";
                        }

                        return true;
                    }
                }
            );
        }

        const answers = await inquirer.prompt(questions);
        Object.assign(args, answers);
    }

    try {
        if (!args.ghToken) {
            throw new Error("--gh-token not specified.");
        }

        const octokit = new Octokit({
            auth: args.ghToken
        });

        await octokit.repos.createDispatchEvent({
            owner: "doitadrian",
            repo: "test-repo",
            event_type: "prepare-release-notes",
            client_payload: { fromVersion, toVersion }
        });

        console.log(green("GitHub workflow successfully triggered."));
        console.log(
            green("See https://github.com/doitadrian/test-repo/actions for action details.")
        );
    } catch (e) {
        console.log(red("Something went wrong:"));
        console.log(red(e.message));
    }
})();
