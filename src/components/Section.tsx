import React from "react";

interface SectionProps {
  /** mobile system */
  default: SectionResponsiveProps;
  /** tablet system */
  tablet?: SectionResponsiveProps;
  /** desktop system */
  desktop?: SectionResponsiveProps;
}

//https://tailwindcss.com/docs/grid-column

interface SectionResponsiveProps {
  /** how many vertical slots it occupes */
  rowSpan: number;
  /**  */
  rowStart: number;
  /**  */
  rowEnd: number;
  /** how many horizontal slots it occupes */
  colSpan: number;
  /**  */
  colStart: number;
  /**  */
  colEnd: number;
}

export const Section: React.FC<SectionProps> = (props) => {
  return <></>;
};
