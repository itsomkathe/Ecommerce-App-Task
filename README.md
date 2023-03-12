
<div align="center">
  <h2 align="center">Appleute E-Commerce App</h2>

  <p align="center">
    
<a href="mailto:someone@example.com" target="_blank" ><strong>omkathe26@gmail.com</strong><a>
    
  </p>
</div>

<summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#backend">Backend</a>
      <ul>
        <li><a href="#architecture">Architecture</a></li>
        <li><a href="#running-the-server">Running The Server</a></li>
      </ul>
    </li>
    <li>
      <a href="#frontend">Frontend</a>
      <ul>
        <li><a href="#architecture">Architecture</a></li>
        <li><a href="#running-the-server">Running The Server</a></li>
      </ul>
    </li>
    <li><a href="#development-server">Screenshots</a></li>
    <li><a href="#babel-config">Further</a></li>
  </ol>

<br/>

## Backend

Tech Stack Used

<ul>
    <li>NodeJS</li>
    <li>ExpressJS</li>
    <li>MongoDB (Local)</li>
    <li>JWT</li>
</ul>

### **Architecture**

</br>

#### **Controllers**

Accept requests and perform the actions via Services.

#### **Services**

For all the actions performed with the database.

#### **Authentication**

Once logged in, server sends cookie with the JWT token to the client. On every request, the `accessMiddleware` validates the token, and adds `user` property to the request, which contains `id` and email of the user.

### **Running the server**

Simply install the dependencies and run `npm start`


## Frontend

Tech Stack Used

<ul>
    <li>ReactJS</li>
    <li>NextJS</li>
    <li>Next UI</li>
    <li>Redux Toolkit</li>
    <li>Axios</li>
</ul>

### **Architecture**

</br>

#### **Elements**

Smallest components for reusibility such as card, modal etc.

#### **Modules**

Components made of Elements for creating larger independent components such as Card List.

#### **Templates**

Page created using Elements and Modules. Templates are imported by files in `pages` folder, as NextJS follows page based routing.

### **Running the server**

Install the dependencies and run `npm run dev`

## Screenshots

<img src="./assets/Capture-1.png"/>
<img src="./assets/Capture-2.png"/>

## Further

Due to limited time some features such as dynamic images, logout on frontend are missing. To logout simply clear the cookies in the browser.

