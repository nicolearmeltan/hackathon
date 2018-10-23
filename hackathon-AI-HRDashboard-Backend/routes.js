var express = require('express')
var router = express.Router()
var chalk = require('chalk');
var request = require('request');
var mongoose = require('mongoose');
var leaveDB = mongoose.model('Absenteeism', {}, 'Absenteeism');
var QOLDB = mongoose.model('QualityOfLife', {}, 'QualityOfLife');
var ntdmn = require('number-to-date-month-name');
var count = require('count-array-values')
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
  var something = await leaveDB.aggregate([
    {
      $group: {
        _id: { month: "$Month of absence" },
        totalLeaves: { $sum: 1 }
      }
    }
  ]);
  for (var i in something) {
    if (something[i]._id.month === 0 || something[i]._id.month === "") {
      something.splice(i, 1);
    }
  }
  something.sort(function (a, b) {
    return a._id.month - b._id.month
  });
  console.log(chalk.magentaBright('sending front end json object', something.length));
  res.send(something);
});
router.get('/PerformanceReport', function (req, res) {

  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "PeformanceReport" });
});
router.get('/QOLReport', async function (req, res) {
  var labas = {};
  var result = await QOLDB.find({'Rank':1});
  console.log('test',result)
  test = JSON.parse(JSON.stringify(result[0]));
  console.log(test,"asidasdasdhioasdhioasdphio")
  labas.SafetyIndex = test["Safety Index"];
  labas.HealthCareIndex = test["Health Care Index"];
  labas.CostOfLiving = test["Cost of Living Index"];
  labas.PurchasingPowerIndex = test["Purchasing Power Index"];
  labas.TrafficCommuteTimeIndex = test["Traffic Commute Time Index"];
  labas.ClimateIndex = test["Climate Index"];
  console.log(labas);
  console.log(chalk.magentaBright('sending front end json object'));
  res.send(labas);
});
router.get('/SickLeaveAnalytics/DailySickLeavePrediction', function (req, res) {
  console.log(chalk.green('Called DailySickLeavePrediction calling Azure endpoint .....'));
  console.log(chalk.magentaBright('sending front end json object'));
  res.send({ "called": "DailySickLeavePrediction" });
});
router.get('/SickLeaveAnalytics/AilmentsReport', async function (req, res) {
  console.log(chalk.green('Called AilmentsReport calling Azure endpoint .....'));
  let url = "https://ussouthcentral.services.azureml.net/workspaces/5d99b1e5dab04ea6a85f0a01e57d5481/services/ce4079d90f774b1f90d0482ab8130ffb/execute?api-version=2.0&format=swagger";
  let MonthlyAilmentReport = [];
  let ranking = [];
  let token = "Bearer qWy40BmquZLGTWhnw0im03hA4vvbyOed0dLVgQWhAhj5eRC37l/8WE3QCtrs3Sau42vLg6DGdaxt620i6O+EOQ==";
  let data = {
    "Inputs": {
      "input1":
        [
          {
            'ID': "1",
            'Reason for absence': "1",
            'Month of absence': "1",
            'Day of the week': "1",
            'Seasons': "1",
            'Transportation expense': "1",
            'Distance from Residence to Work': "1",
            'Service time': "1",
            'Age': "1",
            'Work load Average/day': "1",
            'Hit target': "1",
            'Disciplinary failure': "1",
            'Education': "1",
            'Son': "1",
            'Social drinker': "1",
            'Social smoker': "1",
            'Pet': "1",
            'Weight': "1",
            'Height': "1",
            'Body mass index': "1",
            'Absenteeism time in hours': "1",
          }
        ],
    },
    "GlobalParameters": {
    }
  };
  var test = new Promise(async function (resolve, rej) {
    console.log('logging Pramis')
    for (var i = 1; i < 13; i++) {
      data["Inputs"]["input1"][0]['Month of absence'] = i;
      var promiseRequest = new Promise(function (resolved, rejected) {
        request.post({
          headers: {
            'content-type': 'application/json',
            'Authorization': token
          },
          url: url,
          body: JSON.stringify(data)
        }, function (err, response, body) {
          if (err) {
            throw Error(err);
          } else {
            body = JSON.parse(body);
            let res = {}
            res.num = body["Results"]["output1"][0]["Month of absence"];
            res.Month = ntdmn.toMonth(body["Results"]["output1"][0]["Month of absence"]);
            res.Ailment = body["Results"]["output1"][0]["Scored Labels"];
            resolved(res);
            console.log('After a call')
          }
        });
      })
      await promiseRequest.then(function (promise) {
        ranking.push(promise.Ailment);
        console.log(ranking)
        MonthlyAilmentReport.push(promise);
        MonthlyAilmentReport.sort(function (a, b) {
          return a.num - b.num
        });
        console.log('should resolve')
        resolve(MonthlyAilmentReport);
      })
    }
    let test = count(ranking);
    let sagot = {
      ranking: test,
      MonthlyAilmentReport:MonthlyAilmentReport
    };
    res.send(sagot);
  });
});
router.get('/SickLeaveAnalytics/WorkStressReport', function (req, res) {
  console.log(chalk.green('Called WorkStressReport calling Azure endpoint .....'));
  let url = "https://ussouthcentral.services.azureml.net/workspaces/5d99b1e5dab04ea6a85f0a01e57d5481/services/563023e45ecf41adb28459648689003f/execute?api-version=2.0&format=swagger";
  let MonthlyAilmentReport = [];
  let ranking = [];
  let token = "Bearer 4JlGhSh8zuqECfaKuxz+f/ioJikyGrHw4D2HiUpwjGT1yqrdO8rhAILFlNEcNODWsEqo5RxUZSvjDlbHvNznog==";
  let data = {
    "Inputs": {
            "input1":
            [
                {
                        'Age': "1",   
                        'Attrition': "1",   
                        'BusinessTravel': "1",   
                        'DailyRate': "1",   
                        'Department': "1",   
                        'DistanceFromHome': "1",   
                        'Education': "1",   
                        'EducationField': "1",   
                        'EmployeeCount': "1",   
                        'EmployeeNumber': "1",   
                        'EnvironmentSatisfaction': "1",   
                        'Gender': "1",   
                        'HourlyRate': "1",   
                        'JobInvolvement': "1",   
                        'JobLevel': "1",   
                        'JobRole': "Test",   
                        'JobSatisfaction': "1",   
                        'MaritalStatus': "1",   
                        'MonthlyIncome': "1",   
                        'MonthlyRate': "1",   
                        'NumCompaniesWorked': "1",   
                        'Over18': "1",   
                        'OverTime': "1",   
                        'PercentSalaryHike': "1",   
                        'PerformanceRating': "1",   
                        'RelationshipSatisfaction': "1",   
                        'StandardHours': "1",   
                        'StockOptionLevel': "1",   
                        'TotalWorkingYears': "1",   
                        'TrainingTimesLastYear': "1",   
                        'WorkLifeBalance': "1",   
                        'YearsAtCompany': "1",   
                        'YearsInCurrentRole': "1",   
                        'YearsSinceLastPromotion': "1",   
                        'YearsWithCurrManager': "1",   
                        'Month of absence': "1",   
                }
            ],
    },
"GlobalParameters":  {
}
};
  var test = new Promise(async function (resolve, rej) {
    console.log('logging Pramis')
    for (var i = 1; i < 13; i++) {
      data["Inputs"]["input1"][0]['JobRole'] = "Test"+i;
      data["Inputs"]["input1"][0]['Month of absence'] = i;
      var promiseRequest = new Promise(function (resolved, rejected) {
        request.post({
          headers: {
            'content-type': 'application/json',
            'Authorization': token
          },
          url: url,
          body: JSON.stringify(data)
        }, function (err, response, body) {
          if (err) {
            throw Error(err);
          } else {
            body = JSON.parse(body);
            let res = {}
            res.num = body["Results"]["output1"][0]["Month of absence"];
            res.Month = ntdmn.toMonth(body["Results"]["output1"][0]["Month of absence"]);
            res.JobRole = body["Results"]["output1"][0]["Scored Labels"];
            resolved(res);
            console.log('After a call')
          }
        });
      })
      await promiseRequest.then(function (promise) {
        ranking.push(promise.JobRole);
        console.log(ranking)
        MonthlyAilmentReport.push(promise);
        MonthlyAilmentReport.sort(function (a, b) {
          return a.num - b.num
        });
        console.log('should resolve')
        resolve(MonthlyAilmentReport);
      })
    }
    let test = count(ranking);
    let sagot = {
      ranking: test,
      MonthlyAilmentReport:MonthlyAilmentReport
    };
    res.send(sagot);
  });
});
module.exports = router