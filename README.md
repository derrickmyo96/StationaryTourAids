KrisLab Tour Kiosk Front-end Development
========================================
- [Introduction](#introduction)
- [Development tools](#development-tools)
  - [More on Development Tools](#more-on-development-tools)
- [Other Features](#other-features)
- [Live Demo](#live-demo)


# Introduction
**Kiosk FrontEnd** is a responsive web application built on **NodeJS, Express** with **EJS** templating and **Bootstrap** for the purpose of introducing visitors of **KrisLab** on its background and innovative developments. This application will also serve as the point of registration for visitors who wish to borrow tablets from **KrisLab** for tour purposes within KrisLab.

As this web application is built using NodeJS, we require both npm and node.js installed on the development machine first.
For this web application, we are using npm version 6.14.5 and node.js version 14.5.0.
### Install nodejs and npm ###
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Install all dependencies in <directory_name> ###
This command installs all dependencies as specified in **package.json** file.
```shell_session
$ npm install
```

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

# Other Features


# More on Development Tools
As we are utilizing EJS as our templating language, we will set the view of our directory as EJS.
### Installing and setting EJS as view
```shell_session
$ npm i ejs
$ expresss --view=ejs <directory_name>
$ cd <directory_name>
```
We use Express as the web framework, which is built for NodeJS. We make use of **express-generator** to quickly create an application skeleton.
### Install Express generator package globally (g stand for global in command): ###
```shell_session
$ npm i express-generator -g
```
**Nodemon** monitors for any changes in the source and automatically restarts the server. It is optional to use **nodemon** for starting the server. We can also use **npm start** to start the server.
### Install the nodemon package globally (Optional)
```shell_session
$ sudo npm install nodemon -g
```
### Starting server using nodemon (Optional)
```shell_session
$ nodemon start
```
### Starting server using npm
```sell_session
$ npm start
```

## dotenv
**dotenv** file is used to store all sensitive information such as username and passwords. These configurations are seperated from the code, which is based on [The Twelve-Factor App](https://12factor.net/config) methodology.
### Install dotenv module
```shell_session
$ npm i dotenv
```

## Cypress
We utilized Cyrpess for our front-end testing purposes, which allows us to write tests for:
1. End-to-end testing
2. Integration testing
3. Unit testing
### Install Cypress module
 ```shell_session
 $ npm install --save-dev cypress
 ```
### Open Cypress from the CLI (Command Line Interface)
```shell_session
$ (npm bin)/cypress open
```
Once Cypress is started, start any test scripts as specified in **/cypress/integration/examples/\<file-name>.spec.js**

# Live Demo
### Our web application is currently hosted on Heroku
https://guarded-springs-79617.herokuapp.com
