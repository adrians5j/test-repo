const execa = require("execa");

(async () => {
    const ts = new Date().getTime();
    const result = execa.sync("touch", [`file-${ts}.txt`]);
})();
