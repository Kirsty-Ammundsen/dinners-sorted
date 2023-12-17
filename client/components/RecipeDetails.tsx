import { useParams } from 'react-router-dom'
import { recipes } from './Recipes'

function RecipeDetails() {
  const { id } = useParams()

  const recipe = recipes.find((recipe) => recipe.id === Number(id))
  const ingredients = recipe?.ingredients.split(',')
  const method = recipe?.method.split('.')
  method?.splice(-1)
  console.log(method)

  return (
    <>
      <div className="recipe-details-page">
        <h2>{recipe?.recipeName}</h2>
        <div className="outside-details-img">
          <img
            className="details-img"
            src={recipe?.imageURL}
            alt={recipe?.recipeName}
          />
        </div>
        <h3>Rating: {recipe?.rating}</h3>
        <h3>
          Have I made this recipe before?{' '}
          {recipe?.cooked === true ? 'Yes' : 'No'}
        </h3>
        <h3>Ingredients: </h3>
        <ul>
          {ingredients?.map((ingredient) => (
            <li key={`${recipe?.id}${ingredient}`}>{ingredient}</li>
          ))}
        </ul>
        <h3>Methods: </h3>
        <ol>
          {method?.map((step) => (
            <li key={`${recipe?.id}${step}`}> {step}</li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default RecipeDetails
