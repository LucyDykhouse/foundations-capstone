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

const port = process.env.PORT || 5885;

app.listen(port, () => console.log(`Server is cruising on port ${port}`));