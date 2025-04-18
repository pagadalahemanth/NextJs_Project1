import { getRecipeById } from '@/utils/data';
import RecipeDetails from '@/components/RecipeDetails';
import Link from 'next/link';

export default function RecipePage({ params }) {
  const recipe = getRecipeById(params.id);
  
  if (!recipe) {
    return (
      <div className="p-4 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
        <p className="mb-4">Sorry, we couldn't find the recipe you're looking for.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Return to recipes
        </Link>
      </div>
    );
  }
  
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to recipes
      </Link>
      
      <RecipeDetails recipe={recipe} />
    </div>
  );
}