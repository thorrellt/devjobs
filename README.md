<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/203610796-b0cda762-efd5-459e-892d-98e354f59c73.jpg" width= "1000">
</div> 

# devjobs Full Stack Website
  
  
The devjobs website is a fictional job board based on a design from [frontendmentor.com](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). This multipage site is single React.js application that utilized React Router dynamically generate the individual job pages. The back end API is built using node.js, expess, and MongoDB to serve the CRUD functions. 

## About devjobs
The home page has search options using both name and location.

A new **account creation** occurs by clicking "Log in" then "Sign up." Certain features need a user account. These include creating and deleting new jobs, and storing your favorite jobs.

For testing, guest can use **Username:** guest / **Password:** guest

Once logged in, jobs become **favorites** by clicking the star on the posting. The "Favorites" checkbox in the search bar will filter out any non-favorite job postings.

After logging in, clicking the user icon on the top right corner will display the **menu.**

Users can **post a job** from the menu. A user only has to fill out the four fields on this screen to post a job. The rest of the job fields will be randomly generated for simplicity, as this is demo.

Users can **delete a job** from the menu as well, as long as it is a job the user created.

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
