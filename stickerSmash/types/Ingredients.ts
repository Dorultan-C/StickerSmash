import { BaseUnit, IngredientCategory, MediaImage, AllergenType, VerificationStatus } from './Common';

export interface Ingredient {
  id: string;
  name: string;
  // 1. NEW: Store translations (e.g., { ro: "Lapte", es: "Leche" })
  translations?: {
    [lang: string]: string;
  };
  
  // 2. NEW: Keywords for finding this item in any language
  searchKeywords?: string[];

  commonAliases: string[]; 
  
  category: IngredientCategory;
  subCategory: string;
  
  baseUnit: BaseUnit; 
  image: MediaImage | null;
  
  nutrients: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };

  allergens: AllergenType[]; 

  // Nested Price Data
  priceData: {
    storeName?: string;
    productUrl?: string;
    packageSize: number; 
    packageUnit: BaseUnit; 
    pricePerPackage: number; 
  };

  status: VerificationStatus;
  
  // Auditing
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}