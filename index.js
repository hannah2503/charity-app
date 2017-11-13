const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const cors            = require('cors');
const router          = require('./config/routes');
const expressJWT      = require('express-jwt');
const { db, port, secret }    = require('./config/environment');
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');

const app             = express();
const environment      = app.get('env');

const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');
mongoose.connect(db[environment], { useMongoClient: true });

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['GET', 'POST'] },
      { url: '/api/login',    methods: ['GET', 'POST'] },
      { url: '/api/shops',    methods: ['GET'] }
    ]
  }));
=======
// app.use('/api', expressJWT({ secret: secret })
//   .unless({
//     path: [
//       { url: '/api/register', methods: ['POST'] },
//       { url: '/api/login',    methods: ['POST'] }
//     ]
//   }));
>>>>>>> 8cf444cc8b1c66968c15612ad04f4f2cec2dba94

app.use(customResponses);
app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

if (environment !== 'test'){
  app.listen(port, () => console.log(`Express is up and running on port: ${port}`));
}

module.exports = app;
