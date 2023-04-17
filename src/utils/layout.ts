import { GridOrientation, IGrid } from "@/types/layout/grid";

/**
 * Return true if layout parameter is GridCols
 * @param layout
 * @returns
 */
function isGridCols(layout: IGrid) {
  return layout.orientation == GridOrientation.COLUMN;
}

/**
 * Return true if layout parameter is GridRows
 * @param layout
 * @returns
 */
function isGridRows(layout: IGrid) {
  return layout.orientation == GridOrientation.ROW;
}

/**
 * Layout Utils
 */
const LayoutUtils = {
  isGridCols,
  isGridRows,
};

export default LayoutUtils;
