import { VerificationStatus, MediaImage } from './Common';

export type CuisineType = 'Spanish' | 'Romanian' | 'French' | 'German' | 'English' | 'Indian' | 'Mexican';

export type DietType = 'Gluten Free' | 'Dairy Free' | 'Halal' | 'Sugar Free' | 'Keto' | 'Vegetarian' | 'Vegan' | 'Paleo' | 'Pescatarian';

export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Brunch' | 'Dessert' | 'Juices' | 'Main Course' | 'Salad' | 'Side Dish' | 'Snack' | 'Soup' | 'Stew' | 'Other';

export interface RecipeIngredient {
  ingredientId: string; // Reference to 'ingredients' collection
  name: string; // Cached name to avoid extra reads
  quantity: number; // Amount needed for baseServings
  unit: string; // Should match ingredient baseUnit or be convertible
  note?: string; // e.g., "finely chopped", "room temperature"
}

export interface InstructionStep {
  stepNumber: number;
  title: string; // e.g., "Prep the veggies"
  description: string;
  image?: MediaImage;
  timerSeconds?: number; // Optional timer
}

export interface Recipe {
  id: string;
  name: string;
  description?: string;
  
  // Metadata
  cuisine: CuisineType;
  prepTimeMinutes: number;
  cookTimeMinutes?: number; // Useful to separate from prep
  
  // Scaling
  baseServings: number; // Default servings (e.g., 2)
  
  // Classification
  diets: DietType[];
  mealTypes: MealType[];
  
  // Content
  equipment: string[];
  chefNotes?: string;
  
  ingredients: RecipeIngredient[];
  instructions: InstructionStep[];
  
  // Social & Stats
  authorId: string;
  status: VerificationStatus;
  
  rating: {
    average: number;
    count: number;
  };
  
  createdAt: number;
  updatedAt: number;
}

// Separate interface for User interactions with a recipe
export interface RecipeInteraction {
  userId: string;
  recipeId: string;
  rating?: number; // 1-5
  comment?: string;
  isFavorite: boolean;
  timestamp: number;
}