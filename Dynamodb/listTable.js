
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://localhost:8000"
});

// Declare local variables
const dynamo = new AWS.DynamoDB();

function getDynamoTables() {
    return new Promise((resolve, reject) => {
        dynamo.listTables({} , (err, data) => {
            if(err){
                console.log("E: ", JSON.stringify(err, null, 2));
            }
            else {
                console.log("D: ", JSON.stringify(data, null, 2));
            };
        })
    })
}
 getDynamoTables();