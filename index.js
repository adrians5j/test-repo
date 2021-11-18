#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const response = data => {
    console.log(JSON.stringify(data));
    process.exit(0);
};

try {
    const { argv } = require("yargs");

    const [script, callback] = argv._;
    const scriptsPath = fs.existsSync(path.join(__dirname, script, "index.js"));
    if (!fs.existsSync(scriptsPath)) {
        response({
            type: "error",
            message: "Script does not exist.",
            code: "SCRIPT_DOES_NOT_EXIST"
        });
    }

    const scripts = require(scriptsPath);
    if (!scripts[callback]) {
        response({
            type: "error",
            message: `Script does exist, but "${callback}" callback is not exported.`,
            code: "SCRIPT_DOES_NOT_EXIST"
        });
    }

    response(script[callback]);
} catch (e) {
    console.log({ type: "error", message: e.message, code: "ERROR" });
}
