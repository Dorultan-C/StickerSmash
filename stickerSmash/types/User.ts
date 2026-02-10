import { DietType } from './Recipe';

export type UserRole = 'user' | 'admin' | 'super_admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phoneNumber?: string;
  
  role: UserRole;
  
  preferences: {
    dietary: DietType[]; // Used to auto-filter recipes
    allergens: string[]; // Used to warn users
    dislikes?: string[]; // user can specify disliked ingredients by name, which we can use to further filter recipes
    measurementSystem: 'metric' | 'imperial';
    notifications?: {
      pushEnabled: boolean;
      mealReminders: boolean;
      weeklyPlan: boolean;
      stockAlerts: boolean;
    };
  };
  
  favorites: string[]; // Array of Recipe IDs
  joinedAt: number;
}