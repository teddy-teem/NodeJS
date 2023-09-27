var AWS = require("aws-sdk");
var fs = require("fs");
const moment = require("moment");

const data = require("./data.json");
AWS.config.update({
  region: "eu-west-2",
  endpoint: "http://localhost:8000"
});
const convertToTimeStamp = (txnDate, txnTime) => {
  console.log("====================", txnTime);
  const formattedDateTime = `${txnDate} ${moment(txnTime, "HHmmSS").format(
    "HH:mm:SS"
  )}`;
  return Number(moment(formattedDateTime).format("X"));
};
// var client = new AWS.DynamoDB();
var documentClient = new AWS.DynamoDB.DocumentClient();

for (let i = 0; i < data.length; i++) {
  const params = {
    TableName: "deposits",
    Item: {
      ...data[i],
      transactionTimeStamp: Number(
        new Date(data[i].transactionDate.toString()).getTime() / 1000
      )
    }
  };
  documentClient.put(params, (e, data) => {
    if (e) {
      console.log("Data Not Inserted! Sorry", JSON.stringify(e, null, 2));
    } else {
      console.log(`${data} Inserted Successfully!`);
    }
  });
}
