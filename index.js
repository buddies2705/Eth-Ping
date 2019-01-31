const Web3 = require('web3')
const rpcURL = "Your_node_url"
var web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));
var nodemailer = require('nodemailer');
var count = 0 
var isMailSend = false;
var numberOfRetries = 3;

var cron = require('node-cron');


//adjust cron timing
cron.schedule('*/10 * * * * *', () => {
  console.log('running a task every minute');
  ping();
});	

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email',
        pass: 'Your_email_password'
    }
});

//You need to allow less secure app if you want to use Gmail mail service.
//Follow this doc (https://support.google.com/accounts/answer/6010255?hl=en)
// and Change account access for less secure apps



var mailOptions = {
    from: 'gaurav@coinmonks.com', // sender address
    to: 'gaurav@coinmonks.com', // list of receivers
    subject: 'Fire In the Hole ✔ , Your node is not responding', // Subject line
    text: 'You node is not responding', // plaintext body
    html: 'your node is not responding' // html body
};


// send mail with defined transport object
function send(){
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
}



function ping(){
	web3.eth.getBlockNumber(function(err, result){
		if(err){
			count++;
			if(count > numberOfRetries && isMailSend == false){
				send();	
				isMailSend = true;
			}
		}
		else {
			count = 0; 
			if(isMailSend){
				isMailSend = false;
			} 
			console.log(result);
	  }
	})
}
