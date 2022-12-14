<h1 align="center"> My Social Network API </h1>



## Description

This will be an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

The user can clone this repository from GitHub.  This application requires Express.js, MongoDB, Mongoose, and Moment.js.  If you run `npm install` in the command line while in the directory for the cloned repo, it will install all the above mentioned so that the application can run properly.  Once installed, run `npm start` to connect to server and synch with MongoDB. 

## Usage

![screenshot of Insomnia and MongoDB Compass](/assets/Capture.PNG)

For more info on how to use this application and how it works, please check out the below links for some video demonstrations.

[Screencastify - walkthrough video 1 - User Routes, Thought Routes](https://drive.google.com/file/d/1KZLKGMnXjkG5mMUV1Wz_AcjweLysuYi2/view?usp=sharing)<br>
[ScreenCastify - walkthrough video 2 - Thought Routes cont'd, Friend, Reaction](https://drive.google.com/file/d/1TVKCpGDejIt_ezNi7rAwByidpJfP23re/view?usp=sharing)<br>

## Tests
No current testing for this application.

## Questions
For any questions or concerns, contact me at either my [GitHub](https://github.com/tkhobbes43)
or my email: t.k.hobbes43@gmail.com