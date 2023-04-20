import { LayoutGridCols } from "@/types/layout/grid";
import React from "react";
import { Section } from "./Section";
import { LayoutSection } from "@/types/layout/section";
import styles from "@/styles/layout.module.css";
import { ResponsiveMediaQueries } from "@/constants/responsive";

/**
 * Grid layout based on columns
 * @param props
 * @returns
 */
export const GridCols: React.FC<LayoutGridCols> = (props) => {
  // create css style from props
  const style: React.CSSProperties = {};
  // define columns
  // default
  if (props.style?.default){
    if(props.style.default.cols){
      style.gridTemplateColumns = `repeat(${props.style.default.cols}, minmax(0, 1fr))`;
    }
    if(props.style.default.gap){
      style.gap = props.style.default.gap;
    }
  }
  // sm
  if (props.style?.sm){
    style
      [ResponsiveMediaQueries.SM as any] = {

    }
  }
  const defaultCols = props.style?.default?.cols;
  if (defaultCols) {
    
  }
  // sm
  const smCols = props.style?.tablet?.cols;
  if (tabletCols) {
    // Adding media query..
    '@media (max-width: 500px)': {
      display: 'none',
    },
    style.gridTemplateColumns = `repeat(${tabletCols}, minmax(0, 1fr))`;
  }

  return (
    <div className={styles.gridContainer} style={style}>
      {props.sections.map((section: LayoutSection, index: number) => {
        return <Section key={index} {...section}></Section>;
      })}
    </div>
  );
};
