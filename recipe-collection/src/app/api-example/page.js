'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ApiExamplePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch('/api/recipes');
        
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    
    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading recipes...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes (API Example)</h1>
      
      <div className="mb-6">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to home
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="border rounded-lg overflow-hidden p-4"
          >
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.description.substring(0, 100)}...</p>
            <div className="mt-4">
              <button 
                onClick={() => fetchRecipeDetails(recipe.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  async function fetchRecipeDetails(id) {
    try {
      const response = await fetch(`/api/recipes/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch recipe details');
      }
      
      const data = await response.json();
      alert(`Recipe: ${data.recipe.title}\nCooking Time: ${data.recipe.cookingTime} minutes\nDifficulty: ${data.recipe.difficulty}`);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  }
}