const execa = require("execa");

(async () => {
    {
        const result = execa.sync("git", ["fetch"]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("git", [
            "checkout",
            "-b",
            `webiny-${new Date().getTime()}`,
            "origin/master"
        ]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("git", ["push", "origin", "HEAD"]);
        console.log(result.stdout);
    }
})();
