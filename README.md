<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/203610796-b0cda762-efd5-459e-892d-98e354f59c73.jpg" width= "1000">
</div> 

# devjobs Full Stack Website
  
  
The devjobs website is a fictional job board based on a design from [frontendmentor.com](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). This multipage site is single React.js application that utilized React Router dynamically generate the individual job pages. The back end API is built using node.js, expess, and MongoDB to serve the CRUD functions. 

## Key Takeaways

**Dynamic routing:** I learned how to implement dynamic URL segments. This allowed me to access data as a parameter in order to generate the contents of a page.

**Server Deployment:** I learned how to deploy a server on Heroku by using their CLI in combination with Git.

**Client Server Interactions via HTTP:** Strengthened knowledge of client-server interactions as a result of building an end-to-end product. 


## Installation

### Client

Once project is pulled, navigate to the client folder and run npm install to add all the dependencies 

```bash
  cd ../[PROJECT-LOCATION]/client
  npm install
```

When all the dependencies are installed, the command npm run dev will launch the front end of the app on your local environment. The front end will run off static data when server cannot be reached.

```bash
  npm run dev
 ```

### Server

Navigate to the server folder and run npm install to add all the dependencies 

```bash
  cd ../[PROJECT-LOCATION]/server
  npm install
```

When all the dependencies are installed, the command npm run start will launch the server of the app on your local environment. The client should now connect to the server when refreshed.

```bash
  npm run start
```   
