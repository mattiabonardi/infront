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
    /** < 640px */
    default?: LayoutGridColsResponsive;
    /** small 640px */
    sm?: LayoutGridColsResponsive;
    /** medium 768px */
    md?: LayoutGridColsResponsive;
    /** large 1024px */
    lg?: LayoutGridColsResponsive;
    /** extra large 1280px */
    xl?: LayoutGridColsResponsive;
    /** 2-extra large 1536 */
    xxl?: LayoutGridColsResponsive;
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
    /** < 640px */
    default?: LayoutGridRowsResponsive;
    /** small 640px */
    sm?: LayoutGridRowsResponsive;
    /** medium 768px */
    md?: LayoutGridRowsResponsive;
    /** large 1024px */
    lg?: LayoutGridRowsResponsive;
    /** extra large 1280px */
    xl?: LayoutGridRowsResponsive;
    /** 2-extra large 1536 */
    xxl?: LayoutGridRowsResponsive;
  };
}

export interface LayoutGridRowsResponsive {
  /** Number of columns */
  rows?: number;
  /** Space between cols (px) */
  gap?: number;
}
