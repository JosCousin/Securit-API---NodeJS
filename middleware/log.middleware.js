const LOG_FILE = './log/req.log';
const fs = require('fs');

const log = (req, res, next) => {
    let logString = [(new Date()).toLocaleString()]
    logString.push(req.method);
    logString.push(req.path);
    logString.push(req.ip);
    logString.push("\n", req.headers["content-type"]);
    if (req.body) {
        if (!req.body.password) {
            logString.push("\n", JSON.stringify(req.body));
        }else {
            logString.push("\n", JSON.stringify({ ...req.body,password: "********" }));
        }
    }
    fs.appendFileSync(LOG_FILE, logString.join(" ") + "\n")
    next();
}

module.exports = log;