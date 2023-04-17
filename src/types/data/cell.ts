import { DataType, DataValueType } from "./general";

/**
 * The cell, the smallest structure
 */
export interface DataCell {
  type: DataType.DATA_CELL;
  value: DataValueType;
}
