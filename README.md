# CodingChallengeAPI

## Overview ##
CodingChallengeAPI is a node/express app which has a simple GET and POST API just to achieve client/server interaction in the CodingChallengeClient

## Tech Stack ##

* Node/Express/Javascript
* Other libraries like body-parser and fs

## Feature Supported ##

* GET - getCodeChallengeListItems - Get the list of Items
* POST -  sendMessage - Send/Validate Message

## Usage ##

To run in local, 

```
npm install
npm test
```

This app is also hosted in Heroku, 

```
https://heroku.app.codechallenge/
```

## Business Logic ##

* GET - getCodeChallengeListItems - Read a static hard coded JSON file and returns it as response. 

* POST -  sendMessage - Accepts a message and randomly decide if it is Accepted or Rejected. 


## What did i learn in this project ? ##

* Never wrote a API from scratch in Node/Express - So that was interesting
* Never tried Heroku before - That was cool and easy
