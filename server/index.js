const express = require('express');
const cors = require('cors');
const authCtrl = require('./controllers/authController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', authCtrl.serveMonthHtml);
app.get('/styles', authCtrl.serveMonthCss);
app.get('/js', authCtrl.serveMonthJs);
app.get('/dec-week-1', authCtrl.serveWeek1Html);
app.get('/dec-week-2', authCtrl.serveWeek2Html);
app.get('/dec-week-3', authCtrl.serveWeek3Html);
app.get('/dec-week-4', authCtrl.serveWeek4Html);
app.get('/dec-week-5', authCtrl.serveWeek5Html);
app.get('/week-1-js', authCtrl.serveWeek1Js);
app.get('/week-2-js', authCtrl.serveWeek2Js);
app.get('/week-3-js', authCtrl.serveWeek3Js);
app.get('/week-4-js', authCtrl.serveWeek4Js);
app.get('/week-5-js', authCtrl.serveWeek5Js);
app.get('/week-styles', authCtrl.serveWeekStyles);
app.post('/post-week-1', authCtrl.postWeek1);
app.get('/events-week-1', authCtrl.eventsWeek1);
app.get('/events-week-2', authCtrl.eventsWeek2);
app.get('/events-week-3', authCtrl.eventsWeek3);
app.get('/events-week-4', authCtrl.eventsWeek4);
app.get('/events-week-5', authCtrl.eventsWeek5);
app.put('/complete-week-1/:id', authCtrl.completeEvtWeek1);
app.delete('/delete-week-1/:id', authCtrl.deleteEvtWeek1);
const port = process.env.PORT || 5885;

app.listen(port, () => console.log(`Server is cruising on port ${port}`));