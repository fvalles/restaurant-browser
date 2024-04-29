# Restaurant Browser App

## General information

This repository holds a **restaurant weather app**. 🍔

It was developed with **React JS**, **React Query**, **Typescript**, **Zustand** and **Styled Components**! 🚀

The app can be executed writing `npm run start` from the root directory

## Coding details

- **Reusable components** were created. They are located in `src/components`.
- **Typographic reusable components** are located in `src/components/typography`. Below I attach screenshots from my Excalidraw board (https://excalidraw.com/) with the names assigned to each text string.
- **A color palette** was created inside of `src/core/theme` and shared through a `<ThemeProvider />` to all Styled Components.
- `<ToastContainer />` from **react-toastify** was used to inform when the user executes a purchase successfully.
- `Session Storage` was used to persist useful session data (restaurant and user zustand stores).
- **API requests** are handled by **react query** which offers among other things: cache capabilities and error, isPending and isRefetching states. Cache is being used so that the query returned value is cached by react query.
- An **Empty state component** was created to show when there is an API request error.
- A **custom default image** was used for the **product images** when the source returned from the API throws an error.
- A **Loading** component was created with a **lottie animation**. It is rendered when the app is waiting for the API data.
- **Custom hooks** and **helpers** were created to handle logic, separate concerns and improve code legibility.
- **Geolocation API** was used to calculate the distance between the user and the restaurants.
- **Error Page** was created to catch 404 errors when the user enters an invalid URL.

## Screenshots

### Typographic Components design
