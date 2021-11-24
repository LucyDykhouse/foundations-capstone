const path = require('path');
evtList1 = [];
evtCount1 = 0;
evtList2 = [];
evtCount2 = 0;
evtList3 = [];
evtCount3 = 0;
evtList4 = [];
evtCount4 = 0;
evtList5 = [];
evtCount5 = 0;


module.exports = {
    serveMonthHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/index.html'));
    },

    serveMonthJs: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/main.js"));
    },

    serveMonthCss: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"));
    },
    
    serveWeek1Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-1.html'));
    },

    serveWeek1Js: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/week-1.js"));
    },

    serveWeek2Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-2.html'));
    },

    serveWeek2Js: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/week-2.js"));
    },

    serveWeek3Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-3.html'));
    },

    serveWeek3Js: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/week-3.js"));
    },

    serveWeek4Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-4.html'));
    },

    serveWeek4Js: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/week-4.js"));
    },

    serveWeek5Html: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/december/week-5.html'));    
    },

    serveWeek5Js: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/december/week-5.js"));
    },

    serveWeekStyles: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/week-styles.css'));
    },

    postWeek1: (req, res) => {
            let {evtName, evtMonth, evtDay, evtTime} = req.body;
            let newEvt = {
                id: evtCount1 + 1,
                month: +evtMonth,
                day: +evtDay,
                name: evtName,
                time: evtTime,
                status: "unchecked"
            };
            evtCount1++;
            evtList1.push(newEvt);
            res.status(200).send(evtList1);
        },

    eventsWeek1: (req, res) => {
        res.status(200).send(evtList1);
    },

    eventsWeek2: (req, res) => {
        res.status(200).send(evtList2);
    },

    eventsWeek3: (req, res) => {
        res.status(200).send(evtList3);
    },

    eventsWeek4: (req, res) => {
        res.status(200).send(evtList4);
    },

    eventsWeek5: (req, res) => {
        res.status(200).send(evtList5);
    },

    completeEvtWeek1: (req, res) => {
        const evtIdx = evtList1.findIndex((evt) => {
            return evt.id === +req.params.id;
        });
        evtList1[evtIdx].status = "checked";
        res.status(200).send(evtList1);
    },

    deleteEvtWeek1: (req, res) => {
        const evtIdx = evtList1.findIndex((evt) => {
            return evt.id === +req.params.id;
        });
        evtList1.splice(evtIdx, 1);
        res.status(200).send(evtList1);
    }

}