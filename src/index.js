const ccAPI = require('charity-commission-api');
const args = { APIKey: '4dde07be-7973-46b2-8', strSearch: 'flood' };
 
ccAPI.GetCharities(args).then(function(result) {
 
   console.log(JSON.stringify(result));
   
}).catch(function(err) {
 
   console.log(`Call to ${err.operationName} failed with error: ${err.err}`);
   
});