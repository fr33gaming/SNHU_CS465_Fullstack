# SNHU_CS465_Fullstack

# Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
### Why did the backend use a NoSQL MongoDB database?

For this project we use several different techniques such as Handlebars with ExpressHtml to create the user portion of the website. This made the project dynamic rather than just using the static html. We also created a SPA for the admin page that allow for users to interact with the information within our database. We used javascript throughout the whole project to add interacting and create useful usecases for our buttons. We chose to use MongoDB because it is a scalable databse base that is useful for our modern websites that would beed space for many users. 

# Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a specific format that allows data to be placed into a database. In this case we use JSON files to hold the values for our different trips and pur different tokens created from the different users. One example is using partiels to hold the header section and the footer section becuase it helped avoid alot of repeated code. Instead we were able to simplify portions of our code. We also used HBS files instead of regular HTML files.

# Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Security is incredibly important because we don't want user with unauthorized access being able to make changes within our webpage or steal any other user data. We used Postman API to test our endpoints to make sure that they were producing the expected reults. This allowed us to also test the security features. Users needed to be logged in with a JWTtoken to be able to make changes. If the token did not match the user would be unable to make changes. In the Postman app we saw this example when we tried a PUT request but were met with a Unauthorized error because we did not log in. We were also able to check that our methods with the application such as the deleteTrips method was deleting the correct trip using the correct TripCode. 

# Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I think that this course has got me once step closer to my dream career. At this point in time my goal is to become a Fullstack developer. This class has introduced to one of the many frameworks that can help me get started. I am now ore familiar with basic html and css. I need to develop more experience with the MEAN stack. 
