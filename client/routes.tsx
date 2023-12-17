import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
// import HomePage from './components/HomePage'
// import FrogPage from './components/FrogPage'
import Sort from './components/Sort'
import Recipes from './components/Recipes'
import RecipeDetails from './components/RecipeDetails'
import Home from './components/Home'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="sort" element={<Sort />} />
    <Route path="recipes" element={<Recipes />} />
    <Route path="recipes/:id" element={<RecipeDetails />} />
  </Route>
)
