import { LayoutSection } from "./section";

/**
 * Grid layout
 */
export type LayoutGrid = LayoutGridCols | LayoutGridRows;

export enum GridOrientation {
  COLUMN,
  ROW,
}

/**
 * Grid layout based on columns
 */
export interface LayoutGridCols {
  orientation: GridOrientation.COLUMN;
  sections: LayoutSection[];
  /** style */
  style?: {
    /** mobile system */
    default?: LayoutGridColsResponsive;
    /** tablet system */
    tablet?: LayoutGridColsResponsive;
    /** desktop system */
    desktop?: LayoutGridColsResponsive;
  };
}

export interface LayoutGridColsResponsive {
  /** Number of columns */
  cols?: number;
  /** Space between cols (px) */
  gap?: number;
}

/**
 * Grid layout based on rows
 */
export interface LayoutGridRows {
  orientation: GridOrientation.ROW;
  sections: LayoutSection[];
  /** style */
  style?: {
    /** mobile system */
    default?: LayoutGridRowsResponsive;
    /** tablet system */
    tablet?: LayoutGridRowsResponsive;
    /** desktop system */
    desktop?: LayoutGridColsResponsive;
  };
}

export interface LayoutGridRowsResponsive {
  /** Number of columns */
  rows?: number;
  /** Space between cols (px) */
  gap?: number;
}
