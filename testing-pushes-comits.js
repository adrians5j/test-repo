const execa = require("execa");

(async () => {
    const ts = new Date().getTime();

    {
        const result = execa.sync("git", ["fetch"]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("git", ["checkout", "-b", `webiny-${ts}`, "origin/master"]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("touch", [`file-${ts}.txt`]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("git", ["add", "."]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("git", ["commit", "-m", `"testing"`]);
        console.log(result.stdout);
    }

    {
        const result = execa.sync("git", ["push", "origin", "HEAD"]);
        console.log(result.stdout);
    }
})();
