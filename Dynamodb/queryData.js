const AWS = require('aws-sdk');
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8002"
});

const documentClient = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: "shipping_config",
    IndexName: "partnerId-planCode",
    KeyConditionExpression: `#partnerId = :partnerId`,
    // FilterExpression: "accountNo = :accountNo",
    ExpressionAttributeValues: {
        ":partnerId": "21b89535-fb63-4d44-b88f-3a0f7c5cde8d",
    },
    ExpressionAttributeNames: {
        "#partnerId": "partnerId"
    }
};

documentClient.query(params, (e, data) => {
    if (e) {
        console.log(`Finding Failed ${JSON.stringify(e, null, 2)}`);
    } else {
        console.log("Data Found", data);
        data.Items.forEach(item => {
            console.log(item);
        });
    }
})