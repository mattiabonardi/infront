import { LayoutGrid } from "./grid";

/**
 * UI View (dynamic application page)
 */
export interface IView {
  id: string;
  layout: LayoutGrid;
}
