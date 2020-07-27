KrisLab Tour Kiosk Front-end Development
========================================
- [Introduction](#introduction)
- [Development tools](#development-tools)
  - [More on Development Tools](#more-on-development-tools)
- [Other Features](#other-features)
- [Live Demo](#live-demo)


# Introduction
**Kiosk FrontEnd** is a responsive web application built on **NodeJS, Express** with **EJS** templating and **Bootstrap** for the purpose of introducing visitors of **KrisLab** on its background and innovative developments. This application will also serve as the point of registration for visitors who wish to borrow tablets from **KrisLab** for tour purposes within **KrisLab**.

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
### Choosing the number of tablets to borrow
We implemented a function, checkAvailability(), to only show the number of available tablets to borrow and to grey out any non-satisfied options.
```javascript
function checkAvailability() {
    const available = document.getElementById('availableNumber').innerHTML;
    if (available == 0) {
        document.getElementById('RequestButton').disabled = true;
        for (var i=1; i<available+1; i++) {
          document.getElementById(i).disabled = true;
        }
        document.getElementById('noTablet').selected = true;
    }
    else {
        document.getElementById('noTablet').disabled = true;
        document.getElementById('1').selected = true;
    }
}
```
### Displaying advertisement videos featuring KrisLab
The aim of this kiosk is to largely replace KrisLab employees having to physically introduce KrisLab to visitor. This is achieved through the use of videos that features KrisLab. These video contents can simply be replaced by adding the relevant videos in the **/public/videos** folder and to specify the path in the **main.ejs** file.
```html
<div id="<unique-id, eg.digitalInnovationHub>" class="container-fluid">
    <div class="embed-responsive embed-responsive-21by9">
        <video controls playsinline>
            <source src="/videos/<video-file-name>.mp4" type="video/mp4">
        </video>
    </div>
    <h2><Description of video file></h2>
</div>
```
Video can be put to autoplay mode using autoPlay (camel cases), or to show the controls by specifying **controls** as an attribute in **\<video>** tag.

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

## Axios
We utilized Axios to perform Promise based HTTP GET and POST requests. When performing GET requests, Axios returns a JSON object. To query for a specifi data, use the following:
```javascript
axios.get(process.env.GET_REQUEST_URL)
  .then((res) => {
    // Handle success
    availableTablet = Object.values(res.data)[position_of_data];
  }).catch((err) => {
    // Handle error
    console.log(error)
  });
});
```


# Live Demo
### Our web application is currently hosted on Heroku
https://guarded-springs-79617.herokuapp.com
