# Fitness Tracker

This is an app made as part of the Hashnode/Appwrite hackathon: https://hashnode.com/hackathons/appwrite

My goal with this app is to test my knowledge and overall just learn as I build.

## Tech Stack

**Client:** Svelte/SvelteKit, Tailwind CSS/Daisy UI

**Server:** Appwrite


## Roadmap

### Project Setup
Set up the project structure.    
This will use Svelte and Tailwind as of now, for the client side, unless I change my mind.    
The backend will obviously use Appwrite as a CMS.

### User Authentication
Appwrite provides a variety of methods to handle user authentication, including email and password, OAuth2 providers, and more. To start with, I could implement the email/password method. I will need to create forms in Svelte for user signup and login, then call the relevant Appwrite APIs.

### Database Creation:
Appwrite provides a NoSQL database system. I need to define the collections (similar to tables in SQL) that I will use. For a fitness tracker, I might need collections like 'users', 'workouts', 'goals' etc.

### Workout Logging
Once the user is authenticated, they should be able to log their workouts. This will require a new Svelte form that, on submission, calls an Appwrite function to store the workout data in the database.

### Goal Setting
Allow users to set fitness goals. This could be another Svelte form, similar to the workout log, but this data might be stored in a different Appwrite collection.

### Progress Tracking
You could display a user's progress towards their goals on a dashboard. This would involve fetching user data from the Appwrite database, processing it, and displaying it in a meaningful way.

### Data Visualization
To make the app more user-friendly, I can use a data visualization library like Chart.js or D3.js to display workout data.

### Testing
I have to make sure to test all the features of my application. I can use tools like Jest for testing your Svelte components.

### Deployment
Finally, I will need to deploy my application. Netlify, Vercel, and Render are good options for this.

## Lessons Learned

** Still to come! **

