# Boilerplate: React with Express and Vite

This is a starter project that uses Vite to bundle a React app and Express to serve it in production. Express is used in development to serve an API server.

Vite React App: [http://localhost:5173](http://localhost:5173)
Express API Server: [http://localhost:3000](http://localhost:3000)

Requests to `http://localhost:5173/api` are proxied to `http://localhost:3000/api`.

## Setup

### Installation

To use, consider these steps:

- Fork this repo
- Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`.

Additional components should be placed in `client/components`.

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react-api)


# Dinner's Sorted 

This is an app that helps you to choose your food for the next week based on recipes you have collected.

## Planning

Ideas for app

[] Homescreen with all functionality as buttons
[] Randomises food options for the next week/fortnight
[] Able to pick days where you have takeaways or already know what you are eating
[] Displays a calendar with all your food options on it 
[] If you input food, it can tell you what recipes you can make
[] Input favourite recipes
[] See a list of favourite recipes
[] Filter through them 
[] Edit/update recipes
[] Delete recipes
[] Pictures of recipes
[] Ability to upload images

Data shape

Recipe {
id:
recipeName:
rating:
dietRequirements:
cookingTime:
fullIngredients: 
method:
}

Create app frontend first to get a good idea of what the data shape should look like, then make the database.

Colour Palette

