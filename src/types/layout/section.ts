import { LayoutGrid } from "./grid";
import { Widget } from "../components/widget";

export interface LayoutSection {
  /** style */
  style?: {
    /** < 640px */
    default?: LayoutSectionResponsive;
    /** small 640px */
    sm?: LayoutSectionResponsive;
    /** medium 768px */
    md?: LayoutSectionResponsive;
    /** large 1024px */
    lg?: LayoutSectionResponsive;
    /** extra large 1280px */
    xl?: LayoutSectionResponsive;
    /** 2-extra large 1536 */
    xxl?: LayoutSectionResponsive;
  };
  child: Widget | LayoutGrid;
}

interface LayoutSectionResponsive {
  /** how many horizontal slots it occupes */
  colSpan?: number;
  /** which column it starts from */
  colStart?: number;
  /** which column it ends from */
  colEnd?: number;
  /** how many vertical slots it occupes */
  rowSpan?: number;
  /** which row it starts from */
  rowStart?: number;
  /** which row it ends from  */
  rowEnd?: number;
}
