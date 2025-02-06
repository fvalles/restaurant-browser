# Restaurant Browser App

## General information

This repository holds a **restaurant browser app**. 🍔

It was developed with **React JS**, **React Query**, **Typescript**, **Zustand** and **Styled Components**! 🚀

The app can be executed writing `npm run start` from the root directory

**[👉🏼 Go to Restaurant Browser App on Netlify 👈🏼](https://restaurant-browser.netlify.app)**

## Coding details

- **Reusable components** were created. They are located in `src/components`.
- **Typographic reusable components** are located in `src/components/typography`. Below I attach screenshots from my Excalidraw board (https://excalidraw.com/) with the names assigned to each text string.
- **A color palette** was created inside of `src/core/theme` and shared through a `<ThemeProvider />` to all Styled Components.
- `<ToastContainer />` from **react-toastify** was used to inform when the user executes a purchase successfully and when a product is added from the search page.
- `Session Storage` was used to persist useful session data (restaurant and user zustand stores).
- **API requests** are handled by **react query** which offers among other things: cache capabilities and error, isPending and isRefetching states. Cache is being used so that the query returned value is cached by react query.
- An **Empty state component** was created to show when there is an API request error.
- A **custom default image** was used for the **product images** when the source returned from the API throws an error.
- A **Loading** component was created with a **lottie animation**. It is rendered when the app is waiting for the API data.
- **Custom hooks** and **helpers** were created to handle logic, separate concerns and improve code legibility.
- **Geolocation API** was used to calculate the distance between the user and the restaurants.
- **Error Page** was created to catch 404 errors when the user enters an invalid URL.
- **Custom hamburguer favicon** was used.

## Screenshots

### Typographic Components design

<img width="810" alt="Screenshot 2024-04-29 at 9 44 06 PM" src="https://github.com/fvalles/restaurant-browser/assets/50526650/17c6c7eb-96e8-4499-9304-8ff6a9b6f264">
<img width="820" alt="Screenshot 2024-04-29 at 9 44 23 PM" src="https://github.com/fvalles/restaurant-browser/assets/50526650/52ec7899-6d31-4035-a68d-bb392b95d4f5">
