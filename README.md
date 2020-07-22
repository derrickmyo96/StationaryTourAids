## StationaryTabletFrontend
Stationary Tablet Frontend Development

# Prequisites for development
### Install nodejs and npm ###
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Install Express generator package globally (g stand for global in command): ###
```shell_session
$ sudo npm install express-generator -g
```

### To run node server, install the nodemon package globally (Optional) ###
### Can run via npm start as well.
```shell_session
$ sudo npm install nodemon -g
```

### Install nodemailer package for sending verification link via email ###
```shell_session
$ npm install --save nodemailer
```

### Install jwt for email verification  ###
```shell_session
$ npm i jsonwebtoken
```

### Install dotenv to load environment modules from .env file into process.env  ###
```shell_session
$ npm i dotenv
```

### Move directory where we want our code to reside ###
```shell_session
$ expresss --view=ejs <directory_name>
$ cd <directory_name>
```

### Install all dependencies in <directory_name> ###
```shell_session
$ npm install
```

### Run node server ###
```shell_session
$ nodemon start
```
### To handle multipart form data ###
```shell_session
npm install --save form-data
```

### For testing ###
```shell_session
npm install cypress --save-dev
```
Use 
```shell_session
$(npm bin)/cypress open
```
to run test environment

### First development stage hosted on Heroku ###
https://guarded-springs-79617.herokuapp.com
