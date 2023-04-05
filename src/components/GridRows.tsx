import React from "react";

interface GridRowsProps {
  /** mobile system */
  default: GridRowsResponsiveProps;
  /** tablet system */
  tablet?: GridRowsResponsiveProps;
  /** desktop system */
  desktop?: GridRowsResponsiveProps;
}

interface GridRowsResponsiveProps {
  /** Number of columns */
  rows: number;
  /** Space between rows (px) */
  gap: number;
}

export const GridRows: React.FC<GridRowsProps> = (props) => {
  return <></>;
};
