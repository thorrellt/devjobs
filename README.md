<div align="center"> 
	<img src="https://user-images.githubusercontent.com/64343445/203610796-b0cda762-efd5-459e-892d-98e354f59c73.jpg" width= "1000">
</div> 

# devjobs Full Stack Website
  
  
The devjobs website is a fictional job board based on a design from [frontendmentor.com](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). This multipage site is single React.js application that utilized React Router dynamically generate the individual job pages. The back end API is built using node.js, expess, and MongoDB to serve the CRUD functions. 

## Key Takeaways

**React Router:** I learned React Router v6 and implemented it to manage the navigation of the multiple pages on this site.. Some of the new features and hooks I used included:
- The new **createBrowserRouter** method of laying out the pathing for my router. This method in conjunction with the **RouterProvider** component was the most succinct for my use case. 
- The **useOutlet** hook was used to funnel the different pages content while ensuring the content was always sandwiched between my navigation bar and footer
- The **useLocation** hook was used to do some conditional rendering to load assets on some pages, and not others.
	

**Form with Controlled Components:** The form on the *Contacts* page was built with controlled components that use one state object as the single source of truth. This state object was also leveraged as part of the logic behind the form validation. The result is the form provides user feedback for invalid fields. In addition, after the first invalid submission attempt, the submit button is disabled until all fields are correct.


**Shared & Conditionally rendered components:** To increase re-usability, there are some shared components, assets, and layout choices. For example, all pages share the navigation bar and footer. However, there are instances where the shared components need slight variations. For instance, the gray circle, behind the navigation bar, is only rendered on specific pages.
  

## Installation

Once project is pulled, enter the main folder location and run npm install to add all the dependencies 

```bash
  cd ../[PROJECT-LOCATION]
  npm install
```

When all the dependencies are installed, the command npm run dev will launch the app on your local enviroment.

```bash
  npm run dev
```    
