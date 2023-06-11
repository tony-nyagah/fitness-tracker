# Fitness Tracker

This is an app made as part of the Hashnode/Appwrite hackathon: https://hashnode.com/hackathons/appwrite

My goal with this app is to test my knowledge and overall just learn as I build.

## Project submission template
https://abalone-swing-bf0.notion.site/Project-Submission-Template-2481a63352434b67822f000eda9ac664

## Tech Stack

**Client:** Vue/Nuxt 3, Tailwind CSS/Daisy UI or Vuetify 3

**Server/Backend:** Appwrite

## Roadmap

### Project Setup
Set up the project structure.    
This will use Vue 3 and Tailwind or Vuetify as of now, for the client side, unless I change my mind.    
The backend will obviously use Appwrite as a CMS.

### User Authentication
Appwrite provides a variety of methods to handle user authentication, including email and password, OAuth2 providers, and more. To start with, I could implement the email/password method. I will need to create forms in Vue 3for user signup and login, then call the relevant Appwrite APIs.

### Database Creation:
Appwrite provides a NoSQL database system. I need to define the collections (similar to tables in SQL) that I will use. For a fitness tracker, I might need collections like 'users', 'workouts', 'goals' etc.

### Workout Logging
Once the user is authenticated, they should be able to log their workouts. This will require a new Vue 3form that, on submission, calls an Appwrite function to store the workout data in the database.

### Goal Setting
Allow users to set fitness goals. This could be another Vue 3form, similar to the workout log, but this data might be stored in a different Appwrite collection.

### Progress Tracking
You could display a user's progress towards their goals on a dashboard. This would involve fetching user data from the Appwrite database, processing it, and displaying it in a meaningful way.

### Data Visualization
To make the app more user-friendly, I can use a data visualization library like Chart.js or D3.js to display workout data.

### Testing
I have to make sure to test all the features of my application. I can use tools like Jest for testing your Vue 3components.

### Deployment
Finally, I will need to deploy my application. Netlify, Vercel, and Render are good options for this.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Lessons Learned

** Still to come! **

