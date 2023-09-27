var AWS = require("aws-sdk");
var fs = require("fs");
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
  });
// var client = new AWS.DynamoDB();
var documentClient = new AWS.DynamoDB.DocumentClient();

var table = "accounts";


var params = {
    TableName: table,
    // ProjectionExpression: "id, firstName",
    // FilterExpression: 'name = :email',
    // ExpressionAttributeValues: {
    //   ":email": "AkashX" 
    // }
    
};

documentClient.scan(params, (err, data)=>{
    if(err){
        console.log(`Unable to read ${params.key.title}. ${JSON.stringify(err)}`);
    }
    else{
        console.log(`Successfully Found: TableName: ${table} `,JSON.stringify(data, null, 2));
        console.log(Object.keys(data.Items).length);
    }

})