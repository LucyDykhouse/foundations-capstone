const path = require('path');
evtList = [];
evtCount = 0;

module.exports = {
    serveMonthHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/index.html'));
    },

    serveMonthCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"));
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
    },

    serveJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/main.js"));
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