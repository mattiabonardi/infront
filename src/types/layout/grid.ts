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
  /** style */
  style: {
    /** mobile system */
    mobile: LayoutGridColsResponsive;
    /** tablet system */
    tablet?: LayoutGridColsResponsive;
    /** desktop system */
    desktop?: LayoutGridColsResponsive;
  };
  sections: LayoutSection[];
}

export interface LayoutGridColsResponsive {
  /** Number of columns */
  cols: number;
  /** Space between cols (px) */
  gap: number;
}

/**
 * Grid layout based on rows
 */
export interface LayoutGridRows {
  orientation: GridOrientation.ROW;
  /** style */
  style: {
    /** mobile system */
    mobile: LayoutGridRowsResponsive;
    /** tablet system */
    tablet?: LayoutGridRowsResponsive;
    /** desktop system */
    desktop?: LayoutGridColsResponsive;
  };
  sections: LayoutSection[];
}

export interface LayoutGridRowsResponsive {
  /** Number of columns */
  cols: number;
  /** Space between cols (px) */
  gap: number;
}
