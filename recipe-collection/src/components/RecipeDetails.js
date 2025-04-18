export default function RecipeDetails({ recipe }) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.description}</p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p><span className="font-medium">Cooking Time:</span> {recipe.cookingTime} minutes</p>
          <p><span className="font-medium">Servings:</span> {recipe.servings}</p>
          <p><span className="font-medium">Difficulty:</span> {recipe.difficulty}</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }