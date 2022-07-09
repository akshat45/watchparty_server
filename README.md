<h1 style="display: flex; align-items: center"> <img alt="Website Logo" src="https://i.ibb.co/7pDxhMB/Square44x44-Logo-altform-lightunplated-targetsize-256.png" height="30px" width="40px" style="margin: 2px"/> Watch Party <img src="https://media1.giphy.com/media/2irERnrC80bV4breHc/giphy.gif" width="120" height="80" style="margin: 10px" /></h1>

## Index
- [Title of the Project](#Title-of-the-Project)
- [Team Members](#Team-Members)
- [Brief description of the project](#Brief-description-of-the-project)
- [Main Features Implemented](#Main-Features-Implemented)
- [Tech stack and concepts used](#Tech-stack-and-concepts-used)
- [Thought behind the project](#Thought-behind-the-project)
- [Further Improvements](#Further-Improvements)
- [Hosted Link](#Hosted-Link)
- [Instructions for local setup](#Instructions-for-local-setup)

## Title of the Project
### `WATCHPARTY`

## Team Members

<p align="center">
<a href="https://github.com/akshat45">
	<img src="https://github.com/akshat45.png" width="60px">
</a>

<a href="https://github.com/jayraikhere">
	<img src="https://github.com/jayraikhere.png" width="60px">
</a>
<a href="https://github.com/ninad-0408/">
	<img src="https://github.com/ninad-0408.png" width="60px">
</a>
</p>
<p align="center">
		<a href="https://github.com/akshat45">Akshat Gupta (2019IMT-011)</a> •
		<a href="https://github.com/jayraikhere">Jay Raikhere (2019IMT-044)</a> •
     <a href="https://github.com/ninad-0408/">Ninad Kalanke  (2019IMG-042)</a> 
</p>

## Brief description of the project

  - A fully functional Progressive Web App (PWA) in which users can watch synchronized online videos with friends. 

  - This website allows the users to create/join a room and invite their friends by share the link of their room, so that other people can also join the room.
  - There can be open rooms, which anyone can join. On the other hand, they can also be password protected. 
  - Host can share the password and link of a particular room and other user can enter the room by the link and correct password.

## Main Features Implemented

- The Platform plays videos in a fully **Synchronized** <img src="https://img.icons8.com/color/15/000000/synchronize--v1.png"/> manner.
- The Web App is fully **Responsive** <img src="https://img.icons8.com/external-nawicon-flat-nawicon/20/000000/external-responsive-seo-and-marketing-nawicon-flat-nawicon.png"/>.
- Made it a **Progressive Web App (PWA)** <img src="https://img.icons8.com/cotton/15/000000/web-apps.png"/>. You can install web app in mobile and desktop.
- Implemented a **Caching Policy** <img src="https://img.icons8.com/external-filled-outline-geotatah/15/000000/external-policy-reverse-logistics-filled-outline-filled-outline-geotatah.png"/> for all the images elements.
- Implemented **Code Splitting** <img src="https://img.icons8.com/office/15/000000/code.png"/> and different techniques to optimize various performance metrics of the website.
- #### **User Functionalities**
  - Authorised users using **JWT Token and Cookies**
  - **Password Recovery** and **Change Password** Feature
  - **Joining, Creating and Deleting Room**
- #### **Room Functionalities**
  - Integrated **YouTube search** with **Voice Recognition**
  - **Real-time text** and **Voice Chat**
  - **Private Room** secured with password
  - **Request Video Syncronization**
  - **Share/Invite** via social media and email
  - **Emoji Palette** for text chat
- #### **Host Privilages**
  - **Make others admin and Remove members from room**
  - **Lock** room, **Close** room and **Delete** room
- #### **Admin Privilages**
  - **Change video url**
  - **Control video** playback

- **Home Page View**
<img src="https://www.linkpicture.com/q/Homepage.jpeg" type="image">

- **Room Page View with Youtube Search**
<img src="https://www.linkpicture.com/q/yputubesearch.jpeg" type="image">

- **Room Page View with settings**
<img src="https://www.linkpicture.com/q/settings.jpeg" type="image">

- **Performance Of Website**
<img src="https://www.linkpicture.com/q/performance.jpeg" type="image">

## Tech stack and concepts used
- #### **Backend**
  - Nodejs
  - Expressjs
  - MongoDB Atlas
  - Socket.io
  - Heroku Deployment  
    <img title="Nodejs" src="https://img.icons8.com/color/50/000000/nodejs.png"/>
    <img title="Expressjs" src="https://avatars.githubusercontent.com/u/5658226?s=40"/>
    <img title="MongoDB Atlas" src="https://img.icons8.com/color/40/000000/mongodb.png"/>
     <img title="Socket.io" src="https://avatars.githubusercontent.com/u/10566080?s=40&v=4"/>
    <img title="Heroku deployment" src="https://img.icons8.com/color/40/000000/heroku.png"/>
- #### **Frontend**
  - React.js
  - Material UI
  - Socket.io Client
  - React-Player
  - Firebase Deployment  
    <img title="Reactjs" src="https://img.icons8.com/color/40/000000/react-native.png"/>
    <img title="Material-UI" src="https://img.icons8.com/color/40/000000/material-ui.png"/>
    <img title="Socket.io Client" src="https://avatars.githubusercontent.com/u/10566080?s=40&v=4"/>
    <img title="Firebase Deployment" src="https://img.icons8.com/color/40/000000/firebase.png"/>
    <img title="Javascript" src="https://img.icons8.com/color/40/000000/javascript.png"/>
    <img title="HTML 5" src="https://img.icons8.com/color/40/000000/html-5--v1.png"/>
    <img title="CSS 3" src="https://img.icons8.com/color/40/000000/css3.png"/>

## Thought behind the project

- During lockdown we lost touch with our friends. This project will help to mitigate loneliness and depression.

- This Project helps to connect people to each other even if they are at different locations.

## Further Improvements
- We are planing to integrate a real-time video chat with help of **Web-RTC**

- We will implement **Streaming through local file** feature.

## Hosted Link 
https://watch-party-project.web.app/

Link to Frontend Repo: https://github.com/akshat45/watchparty_frontend
## Instructions for local setup:

Clone this repo using
```bash
git clone https://github.com/akshat45/watchparty_server.git
cd watchparty_server
```
After cloning create a <code>.env</code> file to store all the environment variables.
<br>Fill in the <code>.env</code> file with the content as follows.

```env
CONNECTION_URL  = RETRACTED (Put your Mongodb Atlas database url here)
hashtoken = RETRACTED (any random string)
NODE_ENV = "dev"
CLIENT_ID2=  RETRACTED (Put Your client id given by google developer console)
CLIENT_SECRET2 = RETRACTED (Put Your client secret given by google developer console)
EMAIL =  RETRACTED (email from which you want to send email)
REFRESH_TOKEN2 =  RETRACTED (Put Your refresh token given by google developer console)
```
After setting the <code>.env</code> file,
<br>For installing all Modules and Packages

```bash
npm install
```
To start the server run the command
```bash
npm start
```

The server will start on port `5000`.

