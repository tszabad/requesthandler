const express = require('express');
const bodyParser = require('body-parser');
const useragent =require('express-useragent');
const app = express();

app.use(bodyParser.json());
app.use(useragent.express());


app.get('/api/whoami',(req, res, next)=>{
    const language = req.acceptsLanguages();
    const software = "OS: " + req.useragent.os+ ", Browser:"+req.useragent.browser;
    const ipadress =  req.ip;

    res.json({'IP adress':ipadress, 'Language':language[0], 'Software':software});
});


app.listen(3000);
