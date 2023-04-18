import {
  GridOrientation,
  LayoutGrid,
  LayoutGridCols,
  LayoutGridRows,
} from "@/types/layout/grid";

/**
 * is object an instance of LayoutGrid
 * @param object
 * @returns
 */
function instanceOfLayoutGrid(object: any): object is LayoutGrid {
  return "orientation" in object;
}

/**
 * Return true if layout parameter is GridCols
 * @param layout
 * @returns
 */
function instanceOfLayoutGridCols(
  layout: LayoutGrid
): layout is LayoutGridCols {
  return layout.orientation == GridOrientation.COLUMN;
}

/**
 * Return true if layout parameter is GridRows
 * @param layout
 * @returns
 */
function instanceOfLayoutGridRows(
  layout: LayoutGrid
): layout is LayoutGridRows {
  return layout.orientation == GridOrientation.ROW;
}

/**
 * Layout Utils
 */
const LayoutUtils = {
  instanceOfLayoutGrid,
  instanceOfLayoutGridCols,
  instanceOfLayoutGridRows,
};

export default LayoutUtils;
