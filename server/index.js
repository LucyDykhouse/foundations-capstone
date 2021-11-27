const express = require('express');
const cors = require('cors');
const authCtrl = require('./controllers/authController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', authCtrl.serveMonthHtml);
app.get('/styles', authCtrl.serveMonthCss);
app.get('/js', authCtrl.serveJs);
app.get('/dec-week-1', authCtrl.serveWeek1Html);
app.get('/dec-week-2', authCtrl.serveWeek2Html);
app.get('/dec-week-3', authCtrl.serveWeek3Html);
app.get('/dec-week-4', authCtrl.serveWeek4Html);
app.get('/dec-week-5', authCtrl.serveWeek5Html);
app.get('/week-styles', authCtrl.serveWeekStyles);
app.get('/get-evts', authCtrl.getEvents);
app.post('/post-evt', authCtrl.postEvents);
app.put('/complete-evt/:id', authCtrl.markEventComplete);
app.delete('/delete-evt/:id', authCtrl.deleteEvent);
const port = process.env.PORT || 5885;

app.listen(port, () => console.log(`Server is cruising on port ${port}`));