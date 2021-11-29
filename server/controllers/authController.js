const path = require('path');
evtList = [];
evtCount = 0;

module.exports = {
    serveDecHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/index.html'));
    },

    serveJanHtml: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/january/index.html"));
    },

    serveMonthCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"));
    },
    
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
    
    serveWeekStyles: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/week-styles.css'));
    },

    serveDecJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/main.js"));
    },

    serveJanJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/january/main.js"));
    },

    getEvents: (req, res) => {
        res.status(200).send(evtList);
    },

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


    markEventComplete: (req, res) => {
        const evtIdx = evtList.findIndex((evt) => {
            return evt.id === +req.params.id;
        });
        evtList[evtIdx].status = "checked";
        res.status(200).send(evtList);
    },

    deleteEvent: (req, res) => {
        const evtIdx = evtList.findIndex((evt) => {
            return evt.id === +req.params.id;
        });
        evtList.splice(evtIdx, 1);
        res.status(200).send(evtList);
    }

}