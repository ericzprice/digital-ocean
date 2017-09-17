# Hello Digital Ocean

Deploy a 'hello world' application to DigitalOcean. The application doesn't need to do anything special, other than display some text to the user, so you can demonstrate that you got your application online.

- Rent a VPS using DigitalOcean. You'll probably want to choose the Ubuntu operating system. 
- ssh into your server: `ssh root@<ip address>`.
- install linux dependencies: `apt-get update`, `apt install nodejs-legacy`, etc.
- push an express application up to github, then clone it down to the droplet. Install node dependencies with `npm install`. 
- install forever (`npm install -g forever`) and run your application (`forever start server.js`)

## Bonus

Rent a domain name from iwantmyname.com. Create an A-record that associates your domain name you just purchased with the IP address of your droplet. 