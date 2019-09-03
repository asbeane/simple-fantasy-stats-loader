'use strict';
const MLBStatsAPI = require('mlb-stats-api');

module.exports.hello = async (event, context, callback) => {

  if (event.lambdaWarmerTrigger) {
    callback(null, {status: 'Ready'});
  } else {
    const mlbStats = new MLBStatsAPI();
    const response = await mlbStats.getAttendance({params: { teamId: 111, leagueId: 103, leagueListid: 103 }});

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.records),
    };
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
