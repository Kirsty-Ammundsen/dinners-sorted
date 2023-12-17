import { Link } from 'react-router-dom'

export const recipes = [
  {
    id: 1,
    recipeName: 'Tofu and Cauliflour Larb',
    rating: 5,
    ingredients:
      'shallots, tofu, cauliflour, lemongrass, khafir lime leaves, sriracha, mint, coriander, lime, rice, iceberg lettuce, ginger, dried chilli',
    method:
      'Grate Tofu and press for 15 mins.  Grate cauliflour and fry in a pan with the tofu until brown.  Remove from pan.  Finely chop lemongrass, chilli, khafir lime leaves, ginger, and shallots.  Fry in the pan until fragrant.  Add tofu and cauliflour mix back into pan.  Add half of the sauce mix.  Serve with rice and lettuce cups.',
    cooked: true,
    keyFeatures: 'vegan, dinner',
  },
  {
    id: 2,
    recipeName: 'Alby/’s best-ever chocolate cake',
    rating: null,
    ingredients:
      '100g butter (softened to room temperature, 100g soft brown sugar, 100g caster sugar, 2 eggs, 60ml canola oil, 1 tsp vanilla extract, 150g plain flour, 50g cocoa powder, 1 tsp baking powder, 1/2 tsp baking soda, 1/4 tsp sea salt, 125g sour cream, 1 tsp instant coffee granules',
    method:
      'Heat the oven to 150C fan-forced (or 170C conventional). Grease and line a 20cm round cake tin with baking paper. In a large bowl using an electric hand or stand mixer (with the paddle attachment), beat the butter and both sugars for three minutes until light and fluffy. Add the eggs, oil and vanilla and mix until smooth. In a separate bowl, whisk together the flour, cocoa, baking powder, baking soda and sea salt. In a small bowl, whisk the sour cream until smooth. Mix half of the flour mixture into the wet ingredients, followed by half of the sour cream. Repeat, adding the remaining flour mixture then sour cream, mixing until just incorporated and smooth. In a cup, whisk together the instant coffee granules and 125 millilitres of boiling water until the coffee is dissolved. Pour the hot coffee into the batter and mix until smooth. Pour the cake batter into the lined cake tin and bake for about 45 minutes, or until a skewer inserted into the centre of the cake comes out clean. Remove from the oven and leave to cool for 15 minutes before removing from the tin and placing on a wire rack to cool fully.',
    cooked: false,
    keyFeatures: 'dessert',
  },
  {
    id: 3,
    recipeName: 'Carrot Cake',
    rating: 5,
    ingredients:
      '2 cups (260 grams) all-purpose flour, 2 teaspoons baking soda, 1/2 teaspoon fine sea salt, 1 ½ teaspoons ground cinnamon, 1 ¼ cups (295 ml) canola or other vegetable oil, 1 cup (200 grams) granulated sugar, 1 cup (190 grams) lightly packed brown sugar, 1 teaspoon vanilla extract, 4 large eggs, at room temperature,3 cups (300 grams) grated peeled carrots (3 medium carrots), 1 cup (100 grams) coarsely chopped pecans, 1/2 cup (65 grams) raisins',
    method:
      'Position a rack in the middle of the oven. Grease two 9-inch round cake pans, line the bottom with parchment paper and then grease the top. Or grease and flour the bottom and sides of both pans. Heat the oven to 176C. Whisk flour, baking soda, salt, and cinnamon in a medium bowl until very well blended. In a separate bowl, whisk the oil, granulated sugar, brown sugar, and vanilla. Add the eggs, one at a time, whisking after each one. Switch to a large rubber spatula. Scrape the sides and bottom of the bowl, then add the dry ingredients in three parts, gently stirring until they disappear and the batter is smooth. Stir in the carrots, nuts, and raisins. Divide the cake batter between the prepared cake pans. Bake until the tops of the cake layers are springy when touched and when a toothpick inserted into the center of the cake comes out clean, 35 to 45 minutes.Cool cakes in the pans for 15 minutes, then carefully turn the cake layers out onto cooling racks. Remove the parchment paper and cool completely. If you find that a cake layer is sticking to the bottom of the pan, leave the cake pan upside down and allow gravity to do its thing.',
    cooked: true,
    keyFeatures: 'dessert',
  },
]

export default function Recipes() {
  return (
    <>
      <h2>Recipes: </h2>
      <ul>
        {recipes.map((recipe) => (
          <>
            <Link to={`/recipes/${recipe.id}`}>
              <li>{recipe.recipeName}</li>
            </Link>{' '}
            <span>Rating: {recipe.rating}/5 </span>
            <span>Recipe cooked: {recipe.cooked === true ? 'Yes' : 'No'}</span>
          </>
        ))}
      </ul>
    </>
  )
}
