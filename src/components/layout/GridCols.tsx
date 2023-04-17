import { IGridCols } from "@/types/layout/grid";
import React from "react";

export const GridCols: React.FC<IGridCols> = (props) => {
  // default constant
  const mobileCols: number = props.mobile.cols ? props.mobile.cols : 1;
  const mobileGap: number = props.mobile.gap ? props.mobile.gap : 5;

  // set tailwind classes
  const classes: string[] = [
    "grid",
    // mobile
    `grid-cols-${mobileCols}`,
    `gap-${mobileGap}`,
  ];
  // tablet
  if (props.tablet?.cols) {
    classes.push(`md:grid-cols-${props.tablet.cols}`);
  }
  if (props.tablet?.gap) {
    classes.push(`md:gap-${props.tablet.gap}`);
  }
  // desktop
  if (props.desktop?.cols) {
    classes.push(`xml:grid-cols-${props.desktop.cols}`);
  }
  if (props.desktop?.gap) {
    classes.push(`xl:gap-${props.desktop.gap}`);
  }

  const icon: React.SVGProps<SVGSVGElement> = <img src="https.//icon.com/svg" />;

  icon

  return (
    <div className={classes.join(" ")}>
      
    </div>
  )
};
