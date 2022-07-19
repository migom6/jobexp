# Job Experiences

**App URL** - [**https://jobexp.vercel.app**](https://jobexp.vercel.app)

**GitHub Repo -** https://github.com/migom6/madhurjya-pegu-frontend-01Jul2022 (private)

## Demo

TODO: - Form validation for dates. offline add, edit jobs not working mutation, readme

[🙏 Please watch in full screen](https://youtu.be/9aolaTAThC4)

## 🌟 Features

1. PWA 
2. Offline Support (Background sync)
3. Authentication + Authorization 
4. Create, Share, Discover Profiles 
5. Change visibility of each section of your profile
6. Server Side Rendered 
7. All the CRUD capabilities asked in the assignment.

## 🖥️ Tech Stack

The tech I have used here are (**Next.js, Typescript, Tailwind, SWR, Workbox, Prisma, Serverless function**)

### Next.js

Next.js provide out of the box server side rendering and serverless functions which are easily deployable to Vercel and Netlify. I have **deployed to Vercel** including the backend which runs as **serverless functions**.

### Typescript

I have been using Typescript professional for more than **two years** and it boots my productivity as it minimizes bugs and also helps in creating a **proper mental model** of all the entities through the codebase. All the libraries I used have proper typescript support **even workbox version is in typescript.**

### Prisma

Prisma provides **first class type-safety (Typescript)** which are automatically generated from the database schema. It handles migrations and has a very easy developer workflow.

### Workbox

It is a service worker library and I have use it to **enable background sync** for better offline support.

### Serverless Function

Next.js frameworks support serverless function.  The code is similar like express or any other backend API library but with the benefits of serverless. Also **types can be shared** between the frontend and backend easily. 

### Tailwind

Tailwind is tiny, **performant**, supports purging and **increases productivity** because it provides low level utility CSS classes.

## 🏠 Architecture

### Filesystem

![Exact file structure can be found in the [repository](https://github.com/migom6/madhurjya-pegu-frontend-01Jul2022)](/overview/file_structure.png)

Exact file structure can be found in the [repository](https://github.com/migom6/madhurjya-pegu-frontend-01Jul2022)

Key takeaways: 

- Most of the code lies inside the **src** folder
- React component are inside the components folder.
- Reusable Pure components like different Buttons, Inputs, Layout, Modals are inside the **common folder**.
- **lib** contains reusable logical functions like **hooks, api calls, other utility functions**
- **worker** contains service worker related code
- **server/controllers** contains backend related stuffs

## 🌎 State management

Out of my previous experience with many state management libraries like **redux (saga), mobX, zustand, swr** … for this assignment I have decided to use **[SWR](https://swr.vercel.app/)** by Next.js. SWR helps in writing cleaner code for **state management + side effects (API calls)**. I didn’t consider Redux as it seemed like an overkill, also zustand could have been a good choice as it give **code-splitting** out of the box.

### Form Validation and State management

The web app involves a lot of form based components. It is very important to manage form state with validation so that the code is predictable and maintainable. Formik and React hook forms are the major libraries. I have used **[React hook form](https://react-hook-form.com/)** in this project since it more performant and the library focuses on hook based utilities. 

### React Suspense + Error Boundary

React suspense for a declarative way to specify **loading states** in the web apps.

Error Boundary for a declarative way to specify **error states** in the web apps.

I prefer **declarative style over imperative** when working with react to make the code base maintainable.

### Server Architecture

Keeping it short as this was a frontend assignment, I have used **Postgres, serverless functions** and proper **authentication and authorization** for **profile visibility** in the web app.

## 🚀 Optimization

![performance.png](/overview/performance.png)

Initially lighthouse score were quite low but now have managed a good score by optimizing the web app. Some of key points are discussed below.

1. **Cumulative Layout Shift (CLS)**

Have improve CLS from 1 to 0.002 by introducing skeleton components. 

1. **FCP, TTI, TBT, SI**

All of this has been improved because of service worker caching strategy (stale while revalidate)

1. **Accessibility**

Achieved  100 score by adding proper **aria-labels** and **screen reader only labels** (W.I.P). Also have used **HTML5 semantic tags**.

1. **Largest Contentful Paint (LCP)**

Current LCP is 2.7s, this is because I am using **base64 encoding for images**. If we store the images to **CDN** and **lazy load** them, LCP can be improved.

## 🕸️ Offline Support

All the html, css, js, assets are cached using **SWR strategy via service worker**. 

Also **background sync i**s used to cache the **POST, PUT, DELETE API**. 

Had to write **custom code** because background sync was not supported for some browsers. This was done by **manually triggering** the API calls from the cache when the user revisits.
