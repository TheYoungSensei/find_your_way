"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = process.env.NODE_ENV === 'dev';
var port = process.env.PORT || 8888;
var dbUser = process.env.USER;
var dbPassword = process.env.PASSWORD;
var app = (0, _express.default)();
app.use(_bodyParser.default.json({
  limit: '20mb'
}));
app.use(_bodyParser.default.urlencoded({
  limit: '20mb',
  extended: true
}));
app.set('view engine', 'pug');
app.set('trust proxy', 1);
app.get('/', function (req, res) {
  res.send('Hello World !');
}); // eslint-disable-next-line no-multi-assign

exports = module.exports = app;
_mongoose.default.Promise = global.Promise;

_mongoose.default.connect("mongodb://".concat(dbUser, ":").concat(dbPassword, "@ds349045.mlab.com:49045/mongo-find-your-way"), {
  useNewUrlParser: true
}, function (error) {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

var db = _mongoose.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('*', function (req, res, next) {
  next(new Error(JSON.stringify({
    message: 'Unknown route',
    status: 404
  })));
});

function errorHandler(err, req, res, next) {
  new Promise(function () {
    var error = JSON.parse(err.message);
    return res.status(error.status).json({
      error: error.message
    });
  }).catch(function (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Unexpected error'
    });
  });
}

app.use(errorHandler); // NO MORE app.use AFTER THIS

app.listen(port, function () {
  console.info("\uD83C\uDF0E  Listening on port ".concat(port, " in ").concat(process.env.NODE_ENV, " mode on Node ").concat(process.version, "."));

  if (isDev) {
    console.info('Open http://localhost:8888');
  }
});