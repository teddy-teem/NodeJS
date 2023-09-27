const AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-2",
  endpoint: "http://localhost:8000"
});
const client = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();

// const tableName = "temp-accounts-table";
const params = {
  TableName: "deposits",
  KeySchema: [
    // The type of of schema.  Must start with a HASH type, with an optional second RANGE.
    {
      // Required HASH type attribute transactionDate
      AttributeName: "transactionTimeStamp",
      KeyType: "HASH"
    },
    {
      // Required HASH type attribute
      AttributeName: "transactionId",
      KeyType: "RANGE"
    }
  ],
  AttributeDefinitions: [
    // The names and types of all primary and index key attributes only
    {
      AttributeName: "transactionId",
      AttributeType: "S" // (S | N | B) for string, number, binary
    },
    {
      AttributeName: "transactionTimeStamp",
      AttributeType: "N" // (S | N | B) for string, number, binary
    }
  ],
  ProvisionedThroughput: {
    // required provisioned throughput for the table
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
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





// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2

// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

