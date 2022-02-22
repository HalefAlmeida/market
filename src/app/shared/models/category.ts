export interface Category {
  id: number;
  name: string;
  status: boolean;
  photoURL: string;
  cols: number; //number of collumns to be displayed in the home component
  rows: number; //number of rows to be displayed in the home component
  componentURL: string; //URL to navigate on click
}
