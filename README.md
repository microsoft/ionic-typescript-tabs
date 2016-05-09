# Ionic Tabs Template

An application using Apache Cordova, Ionic Framework, and Typescript. Currently supporting iOS, Android and Windows 10.

## Important!
To learn more about Tools for Apache Cordova, visit this [link](https://taco.visualstudio.com/).

## Table of Contents
 - [Requirements](#requirements)
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)

## Requirements
1. node.js
2. Cordova and Ionic - [sudo] npm install -g cordova ionic
3. TypeScript - [sudo] npm install -g typescript
4. Gulp - [sudo] npm install -g gulp
5. Bower - [sudo] npm install -g bower

## Getting Started

With VS Code:
* Clone this repository.
* Run `npm install` from the project root.
* Add android / iOS / windows platform to your project by running `ionic platform add <platform name>` in a terminal from your project root.
* Build the project by running gulp tsc and then `ionic build <platform name>`
* Deploy to device or emulator by running `ionic run <platform name>` or `ionic emulate <platform name>`
* Success

With Visual Studio:
* Clone this repository.
* Open the ionic-typescript-tabs.sln in Visual Studio.
* Install npm packages by going to your Solution Explorer -> Dependencies -> npm and clicking on 'Restore Packages'. 
* Once packages are restored, build the project and deploy it on an android emulator. 
* Success


## File Structure of App

```
ionic-typescript-tabs/
├── app/                               * Working directory for TypeScript files
│   ├── app.ts                         * Main Application configuration
│   ├── controllers.ts                 * App logic
│   └── services.ts                    * Helper Service methods
│
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins go
|
├── resources/                         * Images for splash screens and icons
|
├── typings/                           * Contains all typings for this project
|
├── www/                               * Folder that is copied over to platforms www directory
│   │   
│   ├── js/                            * Contains transpiled JS files from TS files
│   │    ├── app.js                         
│   │    ├── controllers.js                 
│   │    └── services.js                
│   │
│   ├── css/                           * Compiled CSS
│   │
│   ├── img/                           * App images
│   │
│   ├── lib/                           * Dependencies from bower install 
│   │
│   └── index.html                     * Main entry point
|
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Example git ignore file
├── config.xml                         * Cordova configuration file
├── gulpfile.js                        * Contains gulp tasks for compiling ts files, scss files and more..
├── ionic.project                      * Ionic configuration file
├── package.json                       * Our javascript dependencies
├── ionic-typescript-tabs.sln         * VS solution
├── ionic-typescript-tabs.jsproj        
├── ionic-typescript-tabs.jsproj.user     
└── README.md                          * This file
```

