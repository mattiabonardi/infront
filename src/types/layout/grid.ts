import { ISection } from "./section";

/**
 * Grid layout
 */
export type IGrid = IGridCols | IGridRows;

export enum GridOrientation {
  COLUMN,
  ROW,
}

/**
 * Grid layout based on columns
 */
export interface IGridCols {
  orientation: GridOrientation.COLUMN;
  /** style */
  style: {
    /** mobile system */
    mobile: GridColsResponsive;
    /** tablet system */
    tablet?: GridColsResponsive;
    /** desktop system */
    desktop?: GridColsResponsive;
  };
  sections: ISection[];
}

export interface GridColsResponsive {
  /** Number of columns */
  cols: number;
  /** Space between cols (px) */
  gap: number;
}

/**
 * Grid layout based on rows
 */
export interface IGridRows {
  orientation: GridOrientation.ROW;
  /** style */
  style: {
    /** mobile system */
    mobile: GridRowsResponsive;
    /** tablet system */
    tablet?: GridRowsResponsive;
    /** desktop system */
    desktop?: GridColsResponsive;
  };
  sections: ISection[];
}

export interface GridRowsResponsive {
  /** Number of columns */
  cols: number;
  /** Space between cols (px) */
  gap: number;
}
