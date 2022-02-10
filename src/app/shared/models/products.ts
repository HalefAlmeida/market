import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  photoURL: string;
  categoryID: string;
  status: boolean;
}
