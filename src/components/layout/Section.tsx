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

  let style: React.CSSProperties = {};

  switch (viewport.device) {
    case Device.DEFAULT:
      style = {
        gridColumn:
          props.style?.default?.colSpan ??
          `span ${props.style?.default?.colSpan} / span ${props.style?.default?.colSpan}`,
        gridColumnStart: props.style?.default?.rowStart,
        gridColumnEnd: props.style?.default?.rowStart,
      };
      break;
    case Device.SM:
      style = {
        gridColumn:
          props.style?.sm?.colSpan ??
          `span ${props.style?.sm?.colSpan} / span ${props.style?.sm?.colSpan}`,
        gridColumnStart: props.style?.sm?.rowStart,
        gridColumnEnd: props.style?.sm?.rowStart,
      };
      break;
    case Device.MD:
      style = {
        gridColumn:
          props.style?.md?.colSpan ??
          `span ${props.style?.md?.colSpan} / span ${props.style?.md?.colSpan}`,
        gridColumnStart: props.style?.md?.rowStart,
        gridColumnEnd: props.style?.md?.rowStart,
      };
      break;
    case Device.LG:
      style = {
        gridColumn:
          props.style?.lg?.colSpan ??
          `span ${props.style?.lg?.colSpan} / span ${props.style?.lg?.colSpan}`,
        gridColumnStart: props.style?.lg?.rowStart,
        gridColumnEnd: props.style?.lg?.rowStart,
      };
      break;
    case Device.XL:
      style = {
        gridColumn:
          props.style?.xl?.colSpan ??
          `span ${props.style?.xl?.colSpan} / span ${props.style?.xl?.colSpan}`,
        gridColumnStart: props.style?.xl?.rowStart,
        gridColumnEnd: props.style?.xl?.rowStart,
      };
      break;
    case Device.XXL:
      style = {
        gridColumn:
          props.style?.xxl?.colSpan ??
          `span ${props.style?.xxl?.colSpan} / span ${props.style?.xxl?.colSpan}`,
        gridColumnStart: props.style?.xxl?.rowStart,
        gridColumnEnd: props.style?.xxl?.rowStart,
      };
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
