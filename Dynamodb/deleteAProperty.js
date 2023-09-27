const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
        TableName : "users",
        Key : {
            "contactId": "contactId"            
        },
        UpdateExpression : "REMOVE ladgerAllowed",
        ReturnValues : "UPDATED_NEW"
    };

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data));
    }
});