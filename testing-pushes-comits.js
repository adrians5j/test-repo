#!/usr/bin/env node
const { red, green } = require("chalk");
const argv = require("yargs").argv;

const { Octokit } = require("@octokit/rest");

const TS = String(new Date().getTime());

(async () => {
    try {
        if (!argv.token) {
            throw new Error(
                `"--token" argument missing. Make sure it contains a valid GitHub access token.`
            );
        }

        const octokit = new Octokit({
            auth: argv.token
        });

        await octokit.repos.createDispatchEvent({
            owner: "doitadrian",
            repo: "test-repo",
            event_type: "prepare-release-notes",
            client_payload: {
                fromVersion: `version-1.${TS}`,
                toVersion: `version-2.${TS}`,
            }
        });

        console.log(green("GitHub workflow successfully triggered."));
        console.log(green("See https://github.com/doitadrian/test-repo/actions for action details."));
    } catch (e) {
        console.log(red("Something went wrong:"));
        console.log(red(e.message));
    }
})();
