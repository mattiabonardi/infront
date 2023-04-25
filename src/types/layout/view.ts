import { LayoutGrid } from "./grid";

/**
 * UI View (dynamic application page)
 */
export interface IView {
  id: string;
  meta: ViewMetadata;
  layout: LayoutGrid;
}

export interface ViewMetadata {
  title?: string;
}
