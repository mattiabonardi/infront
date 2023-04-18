import { DataCell } from "../data/cell";
import { DataGrid } from "../data/grid";
import { DataTree } from "../data/tree";

export interface Widget {
  type: WidgetType;
  id: string;
}

/**
 * Type of Widgets
 */
export enum WidgetType {
  /** Button Component */
  BUTTON,
  /** Data Table */
  DATA_TABLE,
  /** Radio Buttons */
  RADIO_BUTTONS,
  /** Select (dropdown list) */
  SELECT,
  /** Text Component */
  TEXT,
  /** Text Field*/
  TEXTFIELD,
  /** Tree */
  TREE,
}

export interface IButton extends Widget {
  type: WidgetType.BUTTON;
  data: DataCell;
}

export interface IDataTable extends Widget {
  type: WidgetType.DATA_TABLE;
  data: DataGrid;
}

export interface IRadioButtons extends Widget {
  type: WidgetType.RADIO_BUTTONS;
  data: DataTree;
}

export interface ISelect extends Widget {
  type: WidgetType.SELECT;
  data: DataTree;
}

export interface IText extends Widget {
  type: WidgetType.TEXT;
  data: DataTree;
}

export interface ITextfield extends Widget {
  type: WidgetType.TEXTFIELD;
  data: DataCell;
}

export interface ITree extends Widget {
  type: WidgetType.TREE;
  data: DataTree;
}
