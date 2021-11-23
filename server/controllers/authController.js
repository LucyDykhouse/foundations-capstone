const path = require('path');

module.exports = {
    serveHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
    },

    serveCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"));
    },

    serveJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/main.js"));
    }
}