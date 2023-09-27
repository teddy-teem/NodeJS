var AWS = require("aws-sdk");
var fs = require("fs");
AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8001"
  });
// var client = new AWS.DynamoDB();
var documentClient = new AWS.DynamoDB.DocumentClient();

var table = "partner-master-accounts-table";

var partnerId = "fc2a9ec2-d77f-ea11-a811-00224801cecd";
var partnerMasterAccountId = "767ea24f-8b11-ed11-b83e-002248428616";

var params = {
    TableName: table,
    Key:{
        partnerId,
        partnerMasterAccountId
    }
};

documentClient.get(params, (err, data)=>{
    if(err){
        console.log(`Unable to read . ${JSON.stringify(err, null, 2)}`);
    }
    else{
        console.log("Successfully Found: ",JSON.stringify(data, null, 5));
    }

})