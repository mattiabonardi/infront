import {
  IButton,
  IDataTable,
  IRadioButtons,
  ISelect,
  IText,
  ITextfield,
  ITree,
  IWidget,
  WidgetType,
} from "@/types/components/widget";
import { Button } from "../widgets/Button";
import { DataTable } from "../widgets/DataTable";
import { RadioButtons } from "../widgets/RadioButtons";
import { Select } from "../widgets/Select";
import { Text } from "../widgets/Text";
import { Textfield } from "../widgets/Textfield";
import { Tree } from "../widgets/Tree";
import React from "react";

/**
 * Component inside section
 * @param props
 * @returns
 */
export const Widget: React.FC<IWidget> = (props) => {
  // create components
  switch (props.type) {
    case WidgetType.BUTTON:
      return <Button {...(props as IButton)}></Button>;
    case WidgetType.DATA_TABLE:
      return <DataTable {...(props as IDataTable)}></DataTable>;
    case WidgetType.RADIO_BUTTONS:
      return <RadioButtons {...(props as IRadioButtons)}></RadioButtons>;
    case WidgetType.SELECT:
      return <Select {...(props as ISelect)}></Select>;
    case WidgetType.TEXT:
      return <Text {...(props as IText)}></Text>;
    case WidgetType.TEXTFIELD:
      return <Textfield {...(props as ITextfield)}></Textfield>;
    case WidgetType.TREE:
      return <Tree {...(props as ITree)}></Tree>;
  }
};
