var express = require('express')
var router = express.Router()
var chalk = require('chalk');
var request = require('request');
var mongoose = require('mongoose');
var leaveDB = mongoose.model('Absenteeism', {}, 'Absenteeism');
router.use(function timeLog(req, res, next) {
  console.log(chalk.green('Time: ', new Date()));
  next()
})

router.post('/createGraphs', function (req, res) {
  if (req.body) {
    console.log(chalk.green("I called create Graphs :D "))
    res.send({ 'called': 'called' })
  }
  else {
    res.send({ error: 'cannot find the body', status_code: 500 });
  }
});
router.get('/LeaveReport', async function (req, res) {
  console.log(chalk.blue('proceeding to db'));
  var something  = await leaveDB.aggregate([
    {
      $group: {
        _id: { month: "$Month of absence" },
        totalLeaves: { $sum: 1 }
      }
    }
  ]);
  for(var i in something){
    if(something[i]._id.month === 0 ||something[i]._id.month === ""){
      something.splice(i,1);
    }
  }
  something.sort(function(a,b){
    return a._id.month - b._id.month 
  });
  console.log(chalk.magentaBright('sending front end json object', something.length));
  res.send(something);
});
router.get('/PerformanceReport', function (req, res) {

  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "PeformanceReport" });
});
router.get('/QOLReport', function (req, res) { 
  console.log(chalk.green('Called QOLReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "QOLReport" });
});
router.get('/SickLeaveAnalytics/DailySickLeavePrediction', function (req, res) {
  console.log(chalk.green('Called DailySickLeavePrediction calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "DailySickLeavePrediction" });
});
router.get('/SickLeaveAnalytics/AilmentsReport', function (req, res) {
  console.log(chalk.green('Called AilmentsReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "AilmentsReport" });
});
router.get('/SickLeaveAnalytics/WorkStressReport', function (req, res) {
  console.log(chalk.green('Called WorkStressReport calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "WorkStressReport" });
});
module.exports = router