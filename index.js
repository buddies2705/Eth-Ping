const config = require('./config.json')
const mailer = require('./sendMail')
var retry = require('retry');
var request = require('request');
var cron = require('node-cron');

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});


const rpcURL = config.rpcURL;
var numberOfRetries = config.numberOfRetries;
var count = 0 
var isMailSend = false;

var getBlock = {"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1};

cron.schedule('*/15 * * * * *', () => {
    console.log('Pinging in every 15 sec');
    pingRequest(rpcURL,function(err, result) {
        if (err || result == "" || result == undefined) { // TODO ask for failure condition or check for positve case
            manageCount(true);
        }else{
            manageCount(false);
        }
    });
  });	


function pingRequest(rpcURL , cb){
request.post({
  headers: {'content-type' : 'application/json'},
  url:     rpcURL,
  body:    JSON.stringify(getBlock)
}, function(error, response, body){
    cb(error , body);
});
}

function manageCount(isError){
    if(isError){
         count++;
         if(count > numberOfRetries && isMailSend == false){
             mailer.send();
             isMailSend = true;
         }
     }
     else {
         count = 0; 
         if(isMailSend){
             isMailSend = false;
         } 
   }
}

