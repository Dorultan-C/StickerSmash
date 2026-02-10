// 1. Units
export type UnitSystem = 'metric'; 
export type BaseUnit = 'g' | 'ml' | 'ea'; 

// 2. The 14 Major EU Allergens
export type AllergenType =
  | 'Soybeans' | 'Milk' | 'Nuts' | 'Celery' | 'Mustard'
  | 'Sesame' | 'Sulphites' | 'Lupin' | 'Molluscs';

// 3. Status
export type VerificationStatus = 'draft' | 'verified';

// 4. Categories
export type IngredientCategory =
  | 'Pantry' | 'Produce' | 'Meat' | 'Fish' | 'Seafood'
  | 'Dairy' | 'Eggs' | 'Bakery' | 'Frozen' | 'Beverages' | 'Others';

// 5. Subcategory Mapping
export const SUBCATEGORIES: Record<IngredientCategory, string[]> = {
  Pantry: ['Seeds', 'Nuts', 'Grains', 'Legumes', 'Rice', 'Pasta', 'Canned Goods', 'Oils', 'Vinegars', 'Spices', 'Baking', 'Others'],
  Produce: ['Vegetables', 'Fruits', 'Herbs', 'Salad', 'Roots', 'Others'],
  Meat: ['Beef', 'Pork', 'Poultry', 'Lamb', 'Cured', 'Others'],
  Fish: ['White Fish', 'Oily Fish', 'Shellfish', 'Others'],
  Seafood: ['Prawns', 'Squid', 'Mussels', 'Others'],
  Dairy: ['Milk', 'Cheese', 'Yogurt', 'Cream', 'Butter', 'Others'],
  Eggs: ['Whole', 'Whites', 'Yolks'],
  Bakery: ['Bread', 'Pastry', 'Tortillas', 'Others'],
  Frozen: ['Vegetables', 'Fruits', 'Meals', 'Ice', 'Others'],
  Beverages: ['Water', 'Juice', 'Soda', 'Alcohol', 'Others'],
  Others: ['General']
};

// 6. Image Structure
export interface MediaImage {
  url: string; 
  path?: string; 
  source: 'upload' | 'link';
}