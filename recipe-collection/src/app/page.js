import Link from 'next/link';
import { getAllRecipes } from '@/utils/data';

export default function Home() {
  const recipes = getAllRecipes();
  
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Recipe Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link 
            href={`/recipes/${recipe.id}`} 
            key={recipe.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.description.substring(0, 100)}...</p>
              <p className="mt-2 text-sm text-gray-500">Cooking time: {recipe.cookingTime} minutes</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}