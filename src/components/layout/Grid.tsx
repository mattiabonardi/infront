import { Device } from "@/types/general";
import {
  LayoutGrid,
  LayoutGridCols,
  LayoutGridRows,
} from "@/types/layout/grid";
import LayoutUtils from "@/utils/layout";
import React from "react";
import styles from "@/styles/layout.module.css";
import { Section } from "./Section";
import { LayoutSection } from "@/types/layout/section";
import { useSelector } from "react-redux";
import { getViewport } from "@/store/reduces/general";

/**
 * Grid Layout
 * @param props
 * @returns
 */
export const Grid: React.FC<LayoutGrid> = (props) => {
  if (LayoutUtils.instanceOfLayoutGridCols(props)) {
    return <GridCols {...props}></GridCols>;
  } else {
    return <GridRows {...props}></GridRows>;
  }
};

/**
 * Grid layout based on columns
 * @param props
 * @returns
 */
const GridCols: React.FC<LayoutGridCols> = (props) => {
  const viewport = useSelector(getViewport);

  let style: React.CSSProperties = {
    gridTemplateColumns: props.style?.default?.cols
      ? `repeat(${props.style?.default?.cols}, minmax(0, 1fr))`
      : undefined,
    gap: props.style?.default?.gap,
  };

  switch (viewport.device) {
    case Device.SM:
      style.gridTemplateColumns = props.style?.sm?.cols
        ? `repeat(${props.style?.sm?.cols}, minmax(0, 1fr))`
        : style.gridTemplateColumns;
      style.gap = props.style?.sm?.gap ? props.style?.sm?.gap : style.gap;
      break;
    case Device.MD:
      style.gridTemplateColumns = props.style?.md?.cols
        ? `repeat(${props.style?.md?.cols}, minmax(0, 1fr))`
        : style.gridTemplateColumns;
      style.gap = props.style?.md?.gap ? props.style?.md?.gap : style.gap;

      break;
    case Device.LG:
      style.gridTemplateColumns = props.style?.lg?.cols
        ? `repeat(${props.style?.lg?.cols}, minmax(0, 1fr))`
        : style.gridTemplateColumns;
      style.gap = props.style?.lg?.gap ? props.style?.lg?.gap : style.gap;

      break;
    case Device.XL:
      style.gridTemplateColumns = props.style?.xl?.cols
        ? `repeat(${props.style?.xl?.cols}, minmax(0, 1fr))`
        : style.gridTemplateColumns;
      style.gap = props.style?.xl?.gap ? props.style?.xl?.gap : style.gap;
      break;
    case Device.XXL:
      style.gridTemplateColumns = props.style?.xxl?.cols
        ? `repeat(${props.style?.xxl?.cols}, minmax(0, 1fr))`
        : style.gridTemplateColumns;
      style.gap = props.style?.xxl?.gap ? props.style?.xxl?.gap : style.gap;
      break;
  }

  return (
    <div className={styles.gridContainer} style={style}>
      {props.sections.map((section: LayoutSection, index: number) => {
        return <Section key={index} {...section}></Section>;
      })}
    </div>
  );
};

/**
 * Grid layout based on rows
 * @param props
 * @returns
 */
const GridRows: React.FC<LayoutGridRows> = (props) => {
  return (
    <div>
      {props.sections.map((section: LayoutSection, index: number) => {
        return <Section key={index} {...section}></Section>;
      })}
    </div>
  );
};
