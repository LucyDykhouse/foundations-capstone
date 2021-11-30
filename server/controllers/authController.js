const path = require('path');

// Simulating a seed file
evtList = [];

// Number of events in array evtList
evtCount = 0;

// Functions to export to index.js
module.exports = {

    //Get month html pages
    serveDecHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/index.html'));
    },

    serveJanHtml: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/january/index.html"));
    },

    serveFebHtml: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/february/index.html"));
    },

    // Get month styling
    serveMonthCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"));
    },
    
    // Get week html pages
    serveDecWeek1Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-1.html'));
    },

    serveDecWeek2Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-2.html'));
    },

    serveDecWeek3Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-3.html'));
    },

    serveDecWeek4Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-4.html'));
    },

    serveDecWeek5Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-5.html'));    
    },

    serveJanWeek1Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/january/week-1.html'));
    },

    serveJanWeek2Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/january/week-2.html'));
    },

    serveJanWeek3Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/january/week-3.html'));
    },

    serveJanWeek4Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/january/week-4.html'));
    },

    serveJanWeek5Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/january/week-5.html'));
    },

    serveJanWeek6Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/january/week-6.html'));
    },
    
    serveFebWeek1Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/february/week-1.html'));
    },

    serveFebWeek2Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/february/week-2.html'));
    },

    serveFebWeek3Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/february/week-3.html'));
    },

    serveFebWeek4Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/february/week-4.html'));
    },

    serveFebWeek5Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/february/week-5.html'));    
    },

    // Get week styling
    serveWeekStyles: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/week-styles.css'));
    },

    // Get js for all months
    serveDecJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/main.js"));
    },

    serveJanJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/january/main.js"));
    },

    serveFebJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/february/main.js"));
    },

    //Get all events
    getEvents: (req, res) => {
        res.status(200).send(evtList);
    },

    //Post an event
    postEvents: (req, res) => {
            let {evtName, evtMonth, evtDay, evtTime} = req.body;
            let newEvt = {
                id: evtCount + 1,
                month: +evtMonth,
                day: +evtDay,
                name: evtName,
                time: evtTime,
                status: "unchecked"
            };
            evtCount++;
            evtList.push(newEvt);
            res.status(200).send(evtList);
    },


    // Update an event
    markEventComplete: (req, res) => {
        const evtIdx = evtList.findIndex((evt) => {
            return evt.id === +req.params.id;
        });
        evtList[evtIdx].status = "checked";
        res.status(200).send(evtList);
    },

    // Delete an event
    deleteEvent: (req, res) => {
        const evtIdx = evtList.findIndex((evt) => {
            return evt.id === +req.params.id;
        });
        evtList.splice(evtIdx, 1);
        res.status(200).send(evtList);
    }

}