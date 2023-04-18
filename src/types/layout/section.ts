import { LayoutGrid } from "./grid";
import { Widget } from "../components/widget";

export interface LayoutSection {
  /** style */
  style: {
    /** mobile system */
    default: LayoutSectionResponsive;
    /** tablet system */
    tablet?: LayoutSectionResponsive;
    /** desktop system */
    desktop?: LayoutSectionResponsive;
  };
  child: Widget | LayoutGrid;
}

interface LayoutSectionResponsive {
  /** how many horizontal slots it occupes */
  colSpan: number;
  /** which column it starts from */
  colStart: number;
  /** which column it ends from */
  colEnd: number;
  /** how many vertical slots it occupes */
  rowSpan: number;
  /** which row it starts from */
  rowStart: number;
  /** which row it ends from  */
  rowEnd: number;
}
