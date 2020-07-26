KrisLab Tour Kiosk Front-end Development
========================================
- [Introduction](#introduction)
- [Development tools](#development-tools)
  - [More on Development Tools](#more-on-development-tools)
- [Live Demo](#live-demo)


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
6. dotenv (https://www.npmjs.com/package/dotenv)

# More on Development Tools
As this web application is built using NodeJS, we require both npm and node.js installed on the development machine first.
For this web application, we are using npm version 6.14.5 and node.js version 14.5.0.
### Install nodejs and npm ###
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

We use Express as the web framework, which is built for NodeJS. We make use of **express-generator** to quickly create an application skeleton.
### Install Express generator package globally (g stand for global in command): ###
```shell_session
$ sudo npm install express-generator -g
```
**Nodemon** monitors for any changes in the source and automatically restarts the server. It is optional to use **nodemon** for starting the server. We can also use **npm start** to start the server.
### Install the nodemon package globally(Optional)
```shell_session
$ sudo npm install nodemon -g
```
### Starting server using nodemon(Optional)
```shell_session
$ nodemon start
```
### Starting server using npm
```sell_session
$ npm start
```

**dotenv** file is used to store all sensitive information such as username and passwords. 
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

Use 
```shell_session
$(npm bin)/cypress open
```
to run test environment

# Live Demo
### Our web application is currently hosted on Heroku
https://guarded-springs-79617.herokuapp.com
