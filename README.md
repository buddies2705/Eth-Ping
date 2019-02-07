# Eth-Ping
Checking if your Ethereum node is alive or not?  

A simple NodeJs Script which checks your Ethereum Node is alive


**What does our Script do?**

The script will continuously call “eth_blockNumber” in every 15 seconds and check if the node is responding properly or not?

### Configuration 

We have added a config.json which you need to change accordingly. 

* **rpcURL** — Add your Node RPC URL

* **email** — Add Your Email

* **password** — Add Your Email Password

* **recipient**- Add recipients URL

* **emailSubject** —  Add email subject

* **emailText** — Add email Text 

* **emailHtml** — Add email text in HTML (If this is configured, our script will ignore above plain email text (emailText))

***Allow less secure app if you want to use Gmail mail service, Follow [this doc](https://support.google.com/accounts/answer/6010255) and Change account access for less secure apps***

We are using Gmail, So you need to change a security setting for your Gmail account, check [this doc](https://support.google.com/accounts/answer/6010255). Also, you need to change a few variables, such as add your node URL and add your Gmail username and password. Also, change from and to and other things accordingly related to Mail which will get send when the script will detect that your node is down. 

### Send Test Email

Once the configuration is done we can test our email setup by running below command.

    npm run testmail

### **How to run it?**

You need to install NodeJs and [clone the repository](https://github.com/buddies2705/Eth-Ping). 

* Check this for [installing NodeJs](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

    git clone https://github.com/buddies2705/Eth-Ping

    npm install

    npm start

We recommend you to use [PM2](https://www.npmjs.com/package/pm2) to run above script, as it restarts the script if it gets crashed for XYZ reason. 


### How to deploy this service using PM2 ###
* Install PM2 on your system using NPM package manager : 
    npm i pm2 -g

* Assuming you have installed all project dependicies and changed the config values :
    pm2 start pm2launch.config.js --env production

To do : The service can dynamically pass the config values from the PM2 launch script.

### **Conclusion**

We will be tweaking it over time and encourage you to use this script. Feedbacks, Comments, and Pull Requests are welcome. 




