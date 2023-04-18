import { LayoutSection } from "@/types/layout/section";
import React from "react";
import LayoutUtils from "@/utils/layout";
import { GridCols } from "./GridCols";
import { GridRows } from "./GridRows";
import {
  IButton,
  IDataTable,
  IRadioButtons,
  ISelect,
  IText,
  ITextfield,
  ITree,
  WidgetType,
} from "@/types/components/widget";
import { Button } from "../widgets/Button";
import { DataTable } from "../widgets/DataTable";
import { RadioButtons } from "../widgets/RadioButtons";
import { Select } from "../widgets/Select";
import { Text } from "../widgets/Text";
import { Textfield } from "../widgets/Textfield";
import { Tree } from "../widgets/Tree";

/**
 * Grid Section
 * @param props
 * @returns
 */
export const Section: React.FC<LayoutSection> = (props) => {
  if (LayoutUtils.instanceOfLayoutGrid(props.child)) {
    if (LayoutUtils.instanceOfLayoutGridCols(props.child)) {
      // create new grid based on colums
      return <GridCols {...props.child}></GridCols>;
    } else {
      // create new grid based on colums
      return <GridRows {...props.child}></GridRows>;
    }
  } else {
    // create components
    switch (props.child.type) {
      case WidgetType.BUTTON:
        return <Button {...(props.child as IButton)}></Button>;
      case WidgetType.DATA_TABLE:
        return <DataTable {...(props.child as IDataTable)}></DataTable>;
      case WidgetType.RADIO_BUTTONS:
        return (
          <RadioButtons {...(props.child as IRadioButtons)}></RadioButtons>
        );
      case WidgetType.SELECT:
        return <Select {...(props.child as ISelect)}></Select>;
      case WidgetType.TEXT:
        return <Text {...(props.child as IText)}></Text>;
      case WidgetType.TEXTFIELD:
        return <Textfield {...(props.child as ITextfield)}></Textfield>;
      case WidgetType.TREE:
        return <Tree {...(props.child as ITree)}></Tree>;
    }
  }
};
