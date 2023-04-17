import { IGrid } from "./grid";
import { Widget } from "../components/widget";

export interface ISection {
  /** style */
  style: {
    /** mobile system */
    default: SectionResponsive;
    /** tablet system */
    tablet?: SectionResponsive;
    /** desktop system */
    desktop?: SectionResponsive;
  };
  child: Widget | IGrid;
}

interface SectionResponsive {
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
