import { IView } from "@/types/layout/view";
import LayoutUtils from "@/utils/layout";
import { GridCols } from "./GridCols";
  
  export const View: React.FC<IView> = (props) => {
    return (
      <div id={props.id} className="view">
        {
          LayoutUtils.isGridCols(props.layout) ?
          <GridCols></GridCols> :
          <GridROw

          } else {

          }
        }
      </div>
    )
  }