<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/203610796-b0cda762-efd5-459e-892d-98e354f59c73.jpg" width= "1000">
</div> 

# devjobs Full Stack Website
    
The **devjobs** website is a fictional job board based on a design from [frontendmentor.com](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). The page is fully **responsive** and functions on all screen sizes. This multi-page site is a single ***ReactJS*** application that utilizes ***React Router*** to dynamically generate individual job pages. The back end API is built using ***Node.js***, ***Express***, and ***MongoDB Atlas*** to serve the CRUD functions including:

- **Creating** new job postings and user accounts.

- **Reading** all job postings regardless of their creator.

- **Updating** user-created job postings and which files are the users' favorite. 

- and, **Deleting**  job postings created by the user.  



## About devjobs

The home page has search options using both name and location.

A new **account creation** occurs by clicking "***Log in***" and then "***Sign up***." However, signing up is not required, as leaving the input fields blank, and clicking the "***Guest***" Button will log in with guest credentials. Certain features need a user account. These include creating, deleting, and storing your favorite jobs.

<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/219966100-03f88f65-e2ab-4347-bc6e-217a45c27441.jpg" width= "400">
</div> 

Once logged in, jobs become ***favorites*** by clicking the star on the posting. The "Favorites" checkbox in the search bar will filter out any non-favorite job postings.

<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/219965983-3527d5ae-5c26-4bfd-a148-b76b01eb378a.gif" width= "1000">
</div> 

After logging in, clicking the user icon on the top right corner will display the ***menu***. ![user_icon](https://user-images.githubusercontent.com/64343445/219966409-3541f4f7-6081-484f-ba6a-1a18dc3e81b1.png) 

Users can ***Create a Job*** from the menu. A user only has to fill out the four fields on this screen to post a job. The rest of the job fields will be randomly generated for simplicity, as this is demo.

If a new job requires editing after creation, clicking "***Edit a Job***" in the menu allows for this. 

Users can ***Delete a Job*** from the menu as well, as long as it is a job the user created.



## Development

### Front End 
the front end is built using the ***ReactJS*** library. The ***React Router*** package handled the routing between the different pages. *React Router* was also vital due to its choices of built-in hooks. The ***useOutlet*** hook enabled easy addition of the navbar and footer to each page. The ***useParams*** hook eased the ability to populate pages based on the URL parameters and data from the API.

***Vite*** handled the development environment and production bundling. The ***Axios*** library offered simple methods for HTTP requests and JSON conversion. I also used the ***lorem-ipsum*** module to generate filler text for created jobs. 

### Back End 
The back end is built using the ***Node.js*** server environment with ***nodemon*** added for development. The ***Express*** framework handled the middleware for the server. *Express*' options for routing and responding to incoming HTTP requests made it invaluable. I expanded upon the *Express* middleware by adding additional packages. These include the ***Helmet*** middleware, which sets the HTTP headers, and the ***XSS-Clean*** middleware to sanitize user inputs.

The database host is the cloud platform ***MongoDB Atlas***. I used the ***mongoose*** library to build my data models. In addition, *mongoose* offers multiple methods to simplify interactions with my database.

### Authentication
I wanted to enable users' ability to create, update, and delete jobs while ensuring they couldn't alter another user's posts. I addressed this problem by adding user profiles. Since REST APIs are stateless, I used ***JSON Web Tokens*** to manage user access. The addition of the ***Bcrypt*** module adds hashing to passwords before the server stores them on the database.



## Key Takeaways

**Dynamic routing:** I learned how to implement dynamic URL segments. This allowed me to access data as a parameter in order to generate the contents of a page.

**Server Deployment:** I learned how to deploy a server on Heroku by using their CLI in combination with Git.

**Client Server Interactions via HTTP:** Strengthened knowledge of client-server interactions as a result of building an end-to-end product. 



## In the Future, I plan to ...
- add pagination to manage how a large number of jobs will be displayed.
- add options to choose what order jobs are displayed (ie, alphabetical, by date posted, etc.)
- add unit testing to server, then automate it.



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
