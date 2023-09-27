const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://localhost:8002"
});

const documentClient = new AWS.DynamoDB.DocumentClient();


// Update the item, unconditionally,

var params = {
    TableName: "payment_details",
    Key: {
        "paymentId": "a3"
    },
    UpdateExpression: "set #locked = :new_value",
    ConditionExpression: " attribute_not_exists(#locked) OR #locked = :current_value",
    ExpressionAttributeNames: {
        '#locked': 'locked'
      },
      ExpressionAttributeValues: {
        ':current_value': false,
        ':new_value': true 
      },
    ReturnValues: "UPDATED_NEW"
};

documentClient.update(params, (e, data) => {
    if (e) {
        console.log(`Failed to Update! sorry ${e}`);
    }
    else {
        console.log(`updated success :-)`);
    }
});