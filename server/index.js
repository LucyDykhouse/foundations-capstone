const express = require('express');
const cors = require('cors');
const authCtrl = require('./controllers/authController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', authCtrl.serveHtml)
app.get('/styles', authCtrl.serveCss);
app.get('/js', authCtrl.serveJs);

const port = process.env.PORT || 5885;

app.listen(port, () => console.log(`Server is cruising on port ${port}`));