import { NextResponse } from 'next/server';
import { getAllRecipes } from '@/utils/data';

export async function GET() {
  // In a real application, this would fetch data from a database
  const recipes = getAllRecipes();
  
  return NextResponse.json({ recipes });
}