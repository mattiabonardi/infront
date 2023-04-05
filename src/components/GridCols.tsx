import React from "react";

interface GridColsProps {
  /** mobile system */
  default: GridColsResponsiveProps;
  /** tablet system */
  tablet?: GridColsResponsiveProps;
  /** desktop system */
  desktop?: GridColsResponsiveProps;
}

interface GridColsResponsiveProps {
  /** Number of columns */
  cols: number;
  /** Space between cols (px) */
  gap: number;
}

export const GridCols: React.FC<GridColsProps> = (props) => {
  return <></>;
};
