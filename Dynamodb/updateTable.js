const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://localhost:8001"
});

const documentClient = new AWS.DynamoDB();

// Update the item, unconditionally,

let params = {
    TableName: "card_tokens",
    AttributeDefinitions:[
        {AttributeName: "contactId", AttributeType: "S"},
        // {AttributeName: "year", AttributeType: "N"}
    ],
    GlobalSecondaryIndexUpdates: [
        {
            Create: {
                IndexName: "contactId-index",
                KeySchema: [
                    {AttributeName: "contactId", KeyType: "HASH"}, //Partition key
                    // {AttributeName: "year", KeyType: "RANGE"}, //Sort key
                ],
                Projection: {
                    "ProjectionType": "ALL"
                },
                ProvisionedThroughput: {                                // Only specified if using provisioned mode
                    "ReadCapacityUnits": 1,"WriteCapacityUnits": 1
                }
            }
        }
    ],
    // LocalSecondaryIndexUpdates: [
    //     {
    //         Create: {
    //             IndexName: "tokenId-contactId-index",
    //             KeySchema: [
    //                 {AttributeName: "tokenId", KeyType: "HASH"}, //Partition key
    //                 {AttributeName: "contactId", KeyType: "RANGE"}, //Sort key
    //             ],
    //             Projection: {
    //                 "ProjectionType": "ALL"
    //             },
    //             ProvisionedThroughput: {                                // Only specified if using provisioned mode
    //                 "ReadCapacityUnits": 1,"WriteCapacityUnits": 1
    //             }
    //         }
    //     }
    // ]
};

documentClient.updateTable(params, (e, data) => {
    if (e) {
        console.log(`Failed to Update! sorry ${e}`);
    }
    else {
        console.log(`updated success :-)`);
    }
});