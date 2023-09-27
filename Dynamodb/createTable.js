const AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-2",
  endpoint: "http://localhost:8002"
});
const client = new AWS.DynamoDB();
//const documentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "payment_details", //TABLE_NAME
  KeySchema: [
    {
      AttributeName: "paymentId", //ATTRIBUTE_NAME_1
      KeyType: "HASH"
    },
    // {
    //   AttributeName: "user", //ATTRIBUTE_NAME_1
    //   KeyType: "RANGE"
    // }
  ],
  AttributeDefinitions: [
    {
      AttributeName: "paymentId", //ATTRIBUTE_NAME_1
      AttributeType: "S" //ATTRIBUTE_TYPE
    }
  ],
  // LocalSecondaryIndexes: [
  //   {
  //     IndexName: "statementId-contactId-index",
  //     KeySchema: [
  //       { AttributeName: "statementId", KeyType: "HASH" },
  //       { AttributeName: "contactId", KeyType: "RANGE" }
  //     ],
  //     Projection: {
  //       ProjectionType: "ALL"
  //     }
  //   }
  // ],
  
  // GlobalSecondaryIndexes: [
  //   {
  //     IndexName: "partnerId-planCode",
  //     KeySchema: [
  //       { AttributeName: "partnerId", KeyType: "HASH" }, //Partition key
  //       { AttributeName: "planCode", KeyType: "RANGE" }, //Hash key
  //     ],
  //     Projection: {
  //       ProjectionType: "ALL"
  //     },
  //     ProvisionedThroughput: {
  //       ReadCapacityUnits: 10,
  //       WriteCapacityUnits: 10
  //     }
  //   },
  //   // {
  //   //   IndexName: "TenancyIdIndex",
  //   //   KeySchema: [
  //   //     { AttributeName: "TenancyId", KeyType: "HASH" } //Partition key
  //   //   ],
  //   //   Projection: {
  //   //     ProjectionType: "ALL"
  //   //   },
  //   //   ProvisionedThroughput: {
  //   //     ReadCapacityUnits: 10,
  //   //     WriteCapacityUnits: 10
  //   //   }
  //   // }
  // ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
};
client.createTable(params, function (tableErr, tableData) {
  if (tableErr) {
    console.error("Error JSON:", JSON.stringify(tableErr, null, 2));
  } else {
    console.log("Created table successfully!", tableData);
  }

  // Adding Batman movie to our collection

  // console.log("Adding a new item...");
  // documentClient.put(params, function(err, data) {
  //     if (err) {
  //         console.error("Error JSON:", JSON.stringify(err, null, 2));
  //     } else {
  //         console.log("Added item successfully!");
  //     }
  // });
});
