var cors = require('cors');
var authRoutes = require('./auth/auth-routes');
var express = require('express');
var propierties = require('./config/propierties');
var DB = require('./config/bd');
//iniciar la base de datos
DB();
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);
authRoutes(router);
router.get('/', (req, res)=>{
    res.send('Bienvenido');
});

app.use(router);
app.listen(propierties.PORT,console.log('Server runing on port ${propierties.PORT}'));