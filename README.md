KrisLab Tour Kiosk Front-end Development
========================================
- [Introduction](#introduction)
- [Development tools](#development-tools)
- [Prerequisite](#prerequisite)


# Introduction
**Kiosk FrontEnd** is a responsive web application built on **NodeJS, Express** with **EJS** templating and **Bootstrap** for the purpose of introducing visitors of **KrisLab** on its background and innovative developments. This application will also serve as the point of registration for visitors who wish to borrow tablets from **KrisLab** for tour purposes within KrisLab.

# Development Tools
The following are the tools, modules and packages from npm that are utilized in this web application development.
### Tools
1. NodeJS (https://nodejs.org/en/)
2. Express (https://expressjs.com)
3. EJS (https://ejs.co)
4. Bootstrap 4 (https://getbootstrap.com)

### Modules
1. Nodemailer (https://www.npmjs.com/package/nodemailer)
2. JWT (https://www.npmjs.com/package/jsonwebtoken)
3. Axios (https://www.npmjs.com/package/axios)
4. Cypress (https://www.npmjs.com/package/cypress)
5. Nodemon (https://www.npmjs.com/package/nodemon)

# Prerequisite
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
