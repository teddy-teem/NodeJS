var AWS = require("aws-sdk");
var fs = require("fs");
AWS.config.update({
  region: "eu-west-2",
  endpoint: "http://localhost:8002"
});
// var client = new AWS.DynamoDB();
let documentClient = new AWS.DynamoDB.DocumentClient();

const writeD = async (data) => {
  try {
    var params = {
      TableName: data.tableName,
      Item: data.Item
    };

    documentClient.put(params, (e, data) => {
      if (e) {
        console.log("Data Not Inserted! Sorry", JSON.stringify(e, null, 2));
      } else {
        console.log(`${data} Inserted Successfully!`);
      }
    });
  } catch (error) {
    console.log("========", error);
  }
};

// const accountVirtualTable = require("./mockData/accountVirtualTable.json");
// for(let van of accountVirtualTable) {

//   const data = {
//     tableName: "accounts-virtual-table",
//     Item: van
//   }
//   writeD(data);
// }

  // const data = {
  //   tableName: "shipping_config",
  //   Item: {
  //     shippingId: "9ace8ee9-a5a2-44c1-87e8-17604a2e8a6a",
  //     partnerId: "786a8655-324f-4fc9-93fb-324d5075a900",
  //     planId: "ca87664f-4e3f-470e-a540-37ea38f47bd6",
  //     planCode: "T0",
  //     provider: "Stander Mail",
  //     cost: 3,
  //     currencyId: "9d73e56b-217c-4809-8fa8-e03212465540",
  //     currencyCode: "USD",
  //     cardCarrier: "", // TODO - implement here when requirement ready
  //     updatedAt: "",
  //     createdAt: "",
  //   }
  // }
  // writeD(data);

// //Plan Table
// const planTable = require("./mockData/planTable.json");
// for(let plan of planTable) {

//   const data = {
//     tableName: "plans",
//     Item: {
//       ...plan
//     }
//   }
//   writeD(data);
// }

// // currencies Table
// const currenciesTable = require("./mockData/currenciesTable.json");
// for(let currency of currenciesTable) {

  // const data = {
  //   tableName: "currencies",
  //   Item: {
  //     isoCurrencyCode: currency.isocurrencycode,
  //     currencyPrecision: currency.currencyprecision,
  //     currencyName: currency.currencyname,
  //     exchangeRate: currency.exchangerate,
  //     currencySymbol:currency.currencysymbol,
  //     stateCode: currency.statecode,
  //     id: currency.transactioncurrencyid
  //   }
  // }
  // writeD(data);
// }

// //Accounts Table
// const accountTable = require("./mockData/accountsTable.json");
// for(account of accountTable) {
//   const data = {
//     tableName: "accounts",
//     Item: account
//   }
//   writeD(data);
// }
// //Accounts Table
// const accountTable = require("./mockData/benificiary.json");
// for(account of accountTable) {
//   const data = {
//     tableName: "beneficiary-v2-table",
//     Item: account
//   }
//   writeD(data);
// }
//Accounts Table

// const users = require("./mockData/usersTable.json");
// for (let user of users) {
//   const data = {
//     tableName: "users",
//     Item: {
//       contactId: user.contactid,
//       partnerId: user._au_brand_value,
//       emailAddress: user.emailaddress1,
//       title: user.salutation || undefined,
//       firstName: user.firstname,
//       lastName: user.lastname,
//       latinFirstName: user.au_latinfirstname,
//       latinLastName: user.au_latinlastname,
//       nickname: user.nickname,
//       dateOfBirth: user.birthdate,
//       mobileNumber: user.mobilephone,
//       ssn: user.au_ssn,
//       province: user.address1_stateorprovince,
//       postCode: user.address1_postalcode,
//       countryCode: user.address1_country,
//       city: user.address1_city,
//       state: user.au_state,
//       addressLine1: user.address1_line1,
//       addressLine2: user.address1_line2 || undefined,
//       addressLine3: user.address1_line3 || undefined,
//       externalId: user.au_externalid,
//       doNotEmail: user.donotemail,
//       doNotPhone: user.donotphone,
//       doNotFax: user.donotfax,
//       doNotPostalMail: user.donotpostalmail,
//       gdprOptOut: user.msdyn_gdproptout,
//       emailVerified: user.au_emailverified,
//       mobileVerified: user.au_mobileverified,
//       mobileValid: user.au_mobilevalid,
//       referralCode: user.au_referralcode,
//       memberCode: user.au_membercode,
//       referrerBy: user._au_referredby_value,
//       preferredCardCurrency: user.au_preferredcardcurrency,
//       preferredDisplayCurrencyId: user._au_preferredcurrencylk_value,
//       preferredDisplayLanguage: user.au_preferreddisplaylanguage,
//       isTermsAgreed: user.au_termsagreed,
//       affiliateReferralCode: user.au_affiliatereferralcode,
//       csSessionId: user.au_cssessionid,
//       created: user.createdon,
//       pinSet: user.au_pinset || false,
//       userStatus: user.au_memberstatus,
//       twoFaMethod: user.au_2famethod,
//       reMarketingId: user.au_remarketingid,
//       ledgerAllowed: user.au_ledgerallowed || false,
//       riskScoreStatus: null
//     }
//   };
//   writeD(data);
// }

//card tokens Table
// const cardTokens = require("./mockData/cardTokensTable.json");
// for(let token of cardTokens) {

//   const data = {
//     tableName: "card_tokens",
//     Item: {...token}
//   }
//   writeD(data);
// }

  const data = {
    tableName: "payment_details",
    Item: {
      paymentId: "a3",
      // locked: true,
    }
  }
  writeD(data);
