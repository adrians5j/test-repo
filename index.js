#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const response = data => {
    console.log(JSON.stringify(data));
    process.exit(0);
};

(async () => {
    try {
        const { argv } = require("yargs");

        const [script, callback] = argv._;
        const scriptsPath = path.join(__dirname, script, "index.js");
        if (!fs.existsSync(scriptsPath)) {
            response({
                type: "error",
                message: "Script does not exist.",
                code: "SCRIPT_DOES_NOT_EXIST"
            });
        }

        const exportedCallbacks = require(scriptsPath);
        if (!exportedCallbacks[callback]) {
            response({
                type: "error",
                message: `Script does exist, but "${callback}" callback is not exported.`,
                code: "SCRIPT_EXISTS_NO_CALLBACK"
            });
        }

        await exportedCallbacks[callback]();
        response({ type: "success", message: "", error: null });
    } catch (e) {
        console.log({ type: "error", message: e.message, code: "ERROR" });
    }
})();
