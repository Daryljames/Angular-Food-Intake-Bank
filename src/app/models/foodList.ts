export interface FoodList {
  id?: number;
  meal: string;
  name: string;
  calorie: number;
  quantity: number;
  measure: string;
  dateEaten: Date;
  createdOn: Date;
  createdBy: string;
  lastUpdatedOn: Date;
  lastUpdatedBy: string;
  isActive: boolean;
  isNotEditable: boolean;
  user: number;
}
