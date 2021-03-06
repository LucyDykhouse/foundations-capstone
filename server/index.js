const express = require('express');
const authCtrl = require('./controllers/authController');

const app = express();

app.use(express.json());

// Enpoints
app.get('/', authCtrl.serveDecHtml);
app.get('/january', authCtrl.serveJanHtml);
app.get('/february', authCtrl.serveFebHtml);
app.get('/js', authCtrl.serveDecJs);
app.get('/jan-js', authCtrl.serveJanJs);
app.get('/feb-js', authCtrl.serveFebJs);
app.get('/styles', authCtrl.serveMonthCss);
app.get('/dec-week-1', authCtrl.serveDecWeek1Html);
app.get('/dec-week-2', authCtrl.serveDecWeek2Html);
app.get('/dec-week-3', authCtrl.serveDecWeek3Html);
app.get('/dec-week-4', authCtrl.serveDecWeek4Html);
app.get('/dec-week-5', authCtrl.serveDecWeek5Html);
app.get('/jan-week-1', authCtrl.serveJanWeek1Html);
app.get('/jan-week-2', authCtrl.serveJanWeek2Html);
app.get('/jan-week-3', authCtrl.serveJanWeek3Html);
app.get('/jan-week-4', authCtrl.serveJanWeek4Html);
app.get('/jan-week-5', authCtrl.serveJanWeek5Html);
app.get('/jan-week-6', authCtrl.serveJanWeek6Html);
app.get('/feb-week-1', authCtrl.serveFebWeek1Html);
app.get('/feb-week-2', authCtrl.serveFebWeek2Html);
app.get('/feb-week-3', authCtrl.serveFebWeek3Html);
app.get('/feb-week-4', authCtrl.serveFebWeek4Html);
app.get('/feb-week-5', authCtrl.serveFebWeek5Html);
app.get('/week-styles', authCtrl.serveWeekStyles);
app.get('/get-evts', authCtrl.getEvents);
app.post('/post-evt', authCtrl.postEvents);
app.put('/complete-evt/:id', authCtrl.markEventComplete);
app.delete('/delete-evt/:id', authCtrl.deleteEvent);

const port = process.env.PORT || 5885;

app.listen(port, () => console.log(`Server is cruising on port ${port}`));