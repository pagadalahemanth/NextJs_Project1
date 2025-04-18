// This file simulates a data layer. In a real app, this would likely connect to a database.

const dummyRecipes = [
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish with a creamy egg sauce, pancetta, and cheese.',
      ingredients: [
        '400g spaghetti',
        '200g pancetta or guanciale, diced',
        '4 large eggs',
        '100g Pecorino Romano cheese, grated',
        'Freshly ground black pepper',
        'Salt'
      ],
      instructions: [
        'Bring a large pot of salted water to a boil. Add the spaghetti and cook until al dente.',
        'While the pasta is cooking, heat a large skillet over medium heat. Add the pancetta and cook until crispy.',
        'In a bowl, whisk together the eggs, grated cheese, and a generous amount of black pepper.',
        'When the pasta is done, reserve 1/2 cup of pasta water, then drain.',
        'Working quickly, add the hot pasta to the skillet with the pancetta. Toss to combine.',
        'Remove the skillet from heat and pour in the egg mixture, stirring continuously.',
        'Add a splash of the reserved pasta water to create a creamy sauce.',
        'Serve immediately with extra grated cheese and black pepper.'
      ],
      cookingTime: 30,
      servings: 4,
      difficulty: 'Medium'
    },
    {
      id: '2',
      title: 'Classic French Toast',
      description: 'Delicious breakfast dish made with bread soaked in a mixture of beaten eggs and milk, then fried until golden brown.',
      ingredients: [
        '6 thick slices of bread',
        '2 large eggs',
        '2/3 cup milk',
        '1 tsp vanilla extract',
        '1/4 tsp ground cinnamon',
        '2 tbsp butter',
        'Maple syrup for serving'
      ],
      instructions: [
        'In a shallow bowl, whisk together eggs, milk, vanilla extract, and cinnamon.',
        'Dip each slice of bread in the egg mixture, allowing it to soak for a few seconds on each side.',
        'Heat butter in a skillet over medium heat.',
        'Cook the bread slices until golden brown on both sides, about 2-3 minutes per side.',
        'Serve warm with maple syrup and fresh berries if desired.'
      ],
      cookingTime: 15,
      servings: 3,
      difficulty: 'Easy'
    },
    {
      id: '3',
      title: 'Veggie Stir-Fry',
      description: 'A quick and healthy stir-fry loaded with colorful vegetables and a flavorful sauce.',
      ingredients: [
        '2 tbsp vegetable oil',
        '2 cloves garlic, minced',
        '1 tbsp fresh ginger, grated',
        '1 bell pepper, sliced',
        '1 carrot, julienned',
        '1 cup broccoli florets',
        '1 cup snap peas',
        '2 tbsp soy sauce',
        '1 tbsp honey',
        '1 tsp sesame oil',
        'Cooked rice for serving'
      ],
      instructions: [
        'Heat vegetable oil in a wok or large skillet over high heat.',
        'Add garlic and ginger, stir-fry for 30 seconds until fragrant.',
        'Add bell pepper, carrot, broccoli, and snap peas. Stir-fry for 4-5 minutes until vegetables are crisp-tender.',
        'In a small bowl, mix soy sauce, honey, and sesame oil.',
        'Pour the sauce over the vegetables and toss to coat.',
        'Cook for another minute until the sauce thickens slightly.',
        'Serve hot over cooked rice.'
      ],
      cookingTime: 20,
      servings: 4,
      difficulty: 'Easy'
    }
  ];
  
  export function getAllRecipes() {
    return dummyRecipes;
  }
  
  export function getRecipeById(id) {
    return dummyRecipes.find(recipe => recipe.id === id);
  }