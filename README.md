# KrisLab Tour Kiosk FrontEnd Development
**Kiosk FrontEnd** is a responsive web application built on **NodeJS, Express** with **EJS** templating and **Bootstrap** for the purpose of introducing visitors of **KrisLab** on its background and innovative developments. This application will also serve as the point of registration for visitors who wish to borrow tablets from **KrisLab** for tour purposes within KrisLab.

## Modules, packages and tools utilized in developing this web application
### Tools
1. NodeJS (JavaScript runtime)
2. Express (Web framework built on NodeJS)
3. EJS (Templating language)
4. Bootstrap 4 (Front-end toolkit for responsive web design)

### Modules
1. Nodemailer (Email sending)
2. JWT (To generate and encrypt token)
3. Axios (Perform HTTPS GET and POST requests)
4. Cypress (For testing purposes)

### Packages
1. Express-generator (To create application skeleton)
2. Nodemon (To develop node.js based applications)

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
