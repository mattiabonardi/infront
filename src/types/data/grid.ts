import { DataCell } from "./cell";
import { DataType, DataValueType } from "./general";

/**
 * Data Grid, table representation
 */
export interface DataGrid {
  type: DataType.DATA_GRID;
  columns: DataColumn[];
  rows: DataRow[];
}

/**
 * Data Grid Column
 */
export interface DataColumn {
  id: string;
  description: string;
}

/**
 * Data Grid Row
 */
export interface DataRow {
  cells: {
    [columnId: string]: DataCell;
  };
}
