const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = "partner-master-accounts-table";
// var params = {
//     TableName: TABLE_NAME,
//     Key: {  pk: { S: pk } }
//   }
const params = {
  TableName: tableName,
  Key: {
    partnerId: "fc2a9ec2-d77f-ea11-a811-00224801cecd",
    partnerMasterAccountId: "767ea24f-8b11-ed11-b83e-002248428616"
  }
};
console.log("Attempting a conditional delete...", params);
documentClient.delete(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to delete item. Error JSON:",
      JSON.stringify(err, null, 4)
    );
  } else {
    console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
  }
});
