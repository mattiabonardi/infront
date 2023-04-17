import { DataType } from "./general";
import { DataCell } from "./cell";

/**
 * Tree Structure
 *
 */
export interface DataTree {
  type: DataType.DATA_TREE;
  cells: DataTreeNode[];
}

/**
 * TreeNode Structure
 */
export interface DataTreeNode extends DataCell {
  cells?: DataTreeNode[];
}
