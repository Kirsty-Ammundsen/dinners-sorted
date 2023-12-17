import { Link } from 'react-router-dom'
import { recipes } from './Recipes'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function Sort() {
  const newRecipes = recipes
  const [refresh, setRefresh] = useState(newRecipes)

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  const shuffledRecipes = shuffle(newRecipes).toSpliced(7)

  function handleClick() {
    shuffle(shuffledRecipes)
    setRefresh(shuffledRecipes)
  }

  // const { data: shuffledRecipes } = useQuery({
  //   queryKey: ['recipes'],
  //   queryFn: handleClick,
  // })

  return (
    <>
      <div className="sort-page">
        <h2 className="recipes-heading">This week's options: </h2>
        <ul className="recipe-container">
          {shuffledRecipes.map((recipe, ind) => (
            <>
              <div className="each-recipe">
                <Link to={`/recipes/${recipe.id}`}>
                  <div className="outside-recipe-img">
                    <img
                      className="recipe-img"
                      src={recipe.imageURL}
                      alt={recipe.recipeName}
                    />
                  </div>

                  <li className="recipe-name">{`Day ${ind + 1}`}</li>
                </Link>
              </div>
            </>
          ))}
        </ul>
        <button className="sort-dinner-button" onClick={handleClick}>
          Please sort my dinners this week!
        </button>
      </div>
    </>
  )
}
