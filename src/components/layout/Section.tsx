import { LayoutSection } from "@/types/layout/section";
import React from "react";
import LayoutUtils from "@/utils/layout";
import { Device } from "@/types/general";
import { Grid } from "./Grid";
import { Widget } from "./Widget";
import { useSelector } from "react-redux";
import { getViewport } from "@/store/reduces/general";

/**
 * Grid Section
 * @param props
 * @returns
 */
export const Section: React.FC<LayoutSection> = (props) => {
  const viewport = useSelector(getViewport);

  let style: React.CSSProperties = {
    gridColumn: props.style?.default?.colSpan
      ? `span ${props.style?.default?.colSpan} / span ${props.style?.default?.colSpan}`
      : undefined,
    gridColumnStart: props.style?.default?.colStart,
    gridColumnEnd: props.style?.default?.colEnd,
    gridRow: props.style?.default?.rowSpan
      ? `span ${props.style?.default?.rowSpan} / span ${props.style?.default?.rowSpan}`
      : undefined,
    gridRowStart: props.style?.default?.rowStart,
    gridRowEnd: props.style?.default?.rowEnd,
  };

  switch (viewport.device) {
    case Device.SM:
      style.gridColumn = props.style?.sm?.colSpan
        ? `span ${props.style?.sm?.colSpan} / span ${props.style?.sm?.colSpan}`
        : style.gridColumn;
      style.gridColumnStart = props.style?.sm?.colStart
        ? props.style?.sm?.colStart
        : style.gridColumnStart;
      style.gridColumnEnd = props.style?.sm?.colEnd
        ? props.style?.sm?.colEnd
        : style.gridColumnEnd;
      style.gridRow = props.style?.sm?.rowSpan
        ? `span ${props.style?.sm?.rowSpan} / span ${props.style?.sm?.rowSpan}`
        : style.gridRow;
      style.gridRowStart = props.style?.sm?.rowStart
        ? props.style?.sm?.rowStart
        : style.gridRowStart;
      style.gridRowEnd = props.style?.sm?.rowEnd
        ? props.style?.sm?.rowEnd
        : style.gridRowEnd;
      break;
    case Device.MD:
      style.gridColumn = props.style?.md?.colSpan
        ? `span ${props.style?.md?.colSpan} / span ${props.style?.md?.colSpan}`
        : style.gridColumn;
      style.gridColumnStart = props.style?.md?.colStart
        ? props.style?.md?.colStart
        : style.gridColumnStart;
      style.gridColumnEnd = props.style?.md?.colEnd
        ? props.style?.md?.colEnd
        : style.gridColumnEnd;
      style.gridRow = props.style?.md?.rowSpan
        ? `span ${props.style?.md?.rowSpan} / span ${props.style?.md?.rowSpan}`
        : style.gridRow;
      style.gridRowStart = props.style?.md?.rowStart
        ? props.style?.md?.rowStart
        : style.gridRowStart;
      style.gridRowEnd = props.style?.md?.rowEnd
        ? props.style?.md?.rowEnd
        : style.gridRowEnd;
      break;
    case Device.LG:
      style.gridColumn = props.style?.lg?.colSpan
        ? `span ${props.style?.lg?.colSpan} / span ${props.style?.lg?.colSpan}`
        : style.gridColumn;
      style.gridColumnStart = props.style?.lg?.colStart
        ? props.style?.lg?.colStart
        : style.gridColumnStart;
      style.gridColumnEnd = props.style?.lg?.colEnd
        ? props.style?.lg?.colEnd
        : style.gridColumnEnd;
      style.gridRow = props.style?.lg?.rowSpan
        ? `span ${props.style?.lg?.rowSpan} / span ${props.style?.lg?.rowSpan}`
        : style.gridRow;
      style.gridRowStart = props.style?.lg?.rowStart
        ? props.style?.lg?.rowStart
        : style.gridRowStart;
      style.gridRowEnd = props.style?.lg?.rowEnd
        ? props.style?.lg?.rowEnd
        : style.gridRowEnd;
      break;
    case Device.XL:
      style.gridColumn = props.style?.xl?.colSpan
        ? `span ${props.style?.xl?.colSpan} / span ${props.style?.xl?.colSpan}`
        : style.gridColumn;
      style.gridColumnStart = props.style?.xl?.colStart
        ? props.style?.xl?.colStart
        : style.gridColumnStart;
      style.gridColumnEnd = props.style?.xl?.colEnd
        ? props.style?.xl?.colEnd
        : style.gridColumnEnd;
      style.gridRow = props.style?.xl?.rowSpan
        ? `span ${props.style?.xl?.rowSpan} / span ${props.style?.xl?.rowSpan}`
        : style.gridRow;
      style.gridRowStart = props.style?.xl?.rowStart
        ? props.style?.xl?.rowStart
        : style.gridRowStart;
      style.gridRowEnd = props.style?.xl?.rowEnd
        ? props.style?.xl?.rowEnd
        : style.gridRowEnd;
      break;
    case Device.XXL:
      style.gridColumn = props.style?.xxl?.colSpan
        ? `span ${props.style?.xxl?.colSpan} / span ${props.style?.xxl?.colSpan}`
        : style.gridColumn;
      style.gridColumnStart = props.style?.xxl?.colStart
        ? props.style?.xxl?.colStart
        : style.gridColumnStart;
      style.gridColumnEnd = props.style?.xxl?.colEnd
        ? props.style?.xxl?.colEnd
        : style.gridColumnEnd;
      style.gridRow = props.style?.xxl?.rowSpan
        ? `span ${props.style?.xxl?.rowSpan} / span ${props.style?.xxl?.rowSpan}`
        : style.gridRow;
      style.gridRowStart = props.style?.xxl?.rowStart
        ? props.style?.xxl?.rowStart
        : style.gridRowStart;
      style.gridRowEnd = props.style?.xxl?.rowEnd
        ? props.style?.xxl?.rowEnd
        : style.gridRowEnd;
      break;
  }

  return (
    <div style={style}>
      {LayoutUtils.instanceOfLayoutGrid(props.child) ? (
        <Grid {...props.child}></Grid>
      ) : (
        <Widget {...props.child}></Widget>
      )}
    </div>
  );
};
