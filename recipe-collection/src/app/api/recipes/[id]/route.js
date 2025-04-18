import { NextResponse } from 'next/server';
import { getRecipeById } from '@/utils/data';

export async function GET(request, { params }) {
  const recipe = getRecipeById(params.id);
  
  if (!recipe) {
    return NextResponse.json(
      { error: 'Recipe not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ recipe });
}