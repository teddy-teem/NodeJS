
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://localhost:8000"
});

// Declare local variables
const dynamo = new AWS.DynamoDB();


const tableName = "TOTP"
function getDynamoTables() {
    var params = {
        TableName: tableName,
    };
    return new Promise((resolve, reject) => {
        dynamo.describeTable(params, (err, data) => {
            if (err) {
                console.log("E: ", JSON.stringify(err, null, 2));
            }
            else {
                console.log("D: ", JSON.stringify(data, null, 2));
            };
        })
    })
}
getDynamoTables();