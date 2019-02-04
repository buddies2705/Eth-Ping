const config = require('./config.json')
var nodemailer = require('nodemailer');

var email = config.email;
var password =  config.password;
var recipient = config.recipient;
var emailSuject = config.emailSuject;
var emailText = config.emailText;
var emailHtml = config.emailHtml;


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email,
        pass: password
    }
});

//You need to allow less secure app if you want to use Gmail mail service.
//Follow this doc (https://support.google.com/accounts/answer/6010255?hl=en)
// and Change account access for less secure apps



var mailOptions = {
    from: email, // sender address
    to: recipient, // list of receivers
    subject: emailSuject, // Subject line
    text: emailText, // plaintext body
    html: emailHtml // html body
};                                                  


// send mail with defined transport object
var send = () => {
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
}

module.exports.sendTestEmail = function () {
    send();
};

module.exports.send = send;  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                