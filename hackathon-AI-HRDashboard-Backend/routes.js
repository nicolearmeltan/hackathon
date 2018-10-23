var express = require('express')
var router = express.Router()
var chalk = require('chalk');
var request = require('request');
router.use(function timeLog(req, res, next) {
  console.log(chalk.green('Time: ', new Date()));
  next()
})

router.post('/createGraphs', function (req, res) {
  if (req.body) {
    console.log(chalk.green("I called create Graphs :D "))
    res.send({'called':'called'})
  }
  else {
    res.send({ error: 'cannot find the body', status_code: 500 });
  }
});
router.get('/LeaveReport', function (req, res) {
  
  console.log(chalk.green('Called leaveReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({"called":"leaveReport"});
});
router.get('/PerformanceReport', function (req, res) {
  console.log(chalk.green('Called PerformanceReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({"called":"PeformanceReport"});
});
router.get('/QOLReport', function (req, res) {
  console.log(chalk.green('Called QOLReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({"called":"QOLReport"});
});
router.get('/SickLeaveAnalytics/DailySickLeavePrediction', function (req, res) {
  console.log(chalk.green('Called DailySickLeavePrediction calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({"called":"DailySickLeavePrediction"});
});
router.get('/SickLeaveAnalytics/AilmentsReport', function (req, res) {
  console.log(chalk.green('Called AilmentsReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({"called":"AilmentsReport"});
});
router.get('/SickLeaveAnalytics/WorkStressReport', function (req, res) {
  console.log(chalk.green('Called WorkStressReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({"called":"WorkStressReport"});
});
module.exports = router