const path = require('path');

module.exports = {
    serveMonthHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/index.html'));
    },

    serveMonthCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"));
    },

    serveMonthJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/main.js"));
    },

    serveWeek1Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-1.html'));
    },

    serveWeek2Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-2.html'));
    },

    serveWeek3Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-3.html'));
    },

    serveWeek4Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-4.html'));
    },

    serveWeek5Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-5.html'));    
    },

    serveWeekStyles: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/week-styles.css'));
    }
}