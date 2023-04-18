import { LayoutGridRows } from "@/types/layout/grid";
import React from "react";
import { Section } from "./Section";
import { LayoutSection } from "@/types/layout/section";

/**
 * Grid layout based on rows
 * @param props
 * @returns
 */
export const GridRows: React.FC<LayoutGridRows> = (props) => {
  return (
    <div>
      {props.sections.map((section: LayoutSection, index: number) => {
        return <Section key={index} {...section}></Section>;
      })}
    </div>
  );
};
