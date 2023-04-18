import { IText, WidgetType } from "@/types/components/widget";
import { DataType } from "@/types/data/general";
import { GridOrientation } from "@/types/layout/grid";
import { IView } from "@/types/layout/view";
import { View } from "@/components/layout/View";

interface ShowcaseProps {
  view: IView;
}

/**
 * Showcase main page
 * @param props
 * @returns
 */
export default function Showcase(props: ShowcaseProps) {
  return <View {...props.view}></View>;
}

/**
 * Fetch view server side
 * @returns
 */
export async function getServerSideProps() {
  const props: ShowcaseProps = {
    view: {
      id: "showcase",
      layout: {
        orientation: GridOrientation.COLUMN,
        sections: [
          {
            child: {
              id: "",
              type: WidgetType.TEXT,
              data: {
                type: DataType.DATA_TREE,
                cells: [
                  {
                    type: DataType.DATA_CELL,
                    value: "Infront Showcase",
                  },
                ],
              },
            } as IText,
          },
        ],
      },
    },
  };
  return {
    props,
  };
}
