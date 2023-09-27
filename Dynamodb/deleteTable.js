var AWS = require("aws-sdk");
const { table } = require("console");

AWS.config.update({
  region: "eu-west-2",
  endpoint: "http://localhost:8002"
});

var dynamodb = new AWS.DynamoDB();

const tableName = "Business";
var params = {
  TableName: tableName
};

dynamodb.deleteTable(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to delete table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Deleted table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
