import { IView } from "@/types/layout/view";
import LayoutUtils from "@/utils/layout";
import { GridCols } from "./GridCols";
import { GridRows } from "./GridRows";
import styles from "@/styles/layout.module.css";

/**
 * View, the Dynamic Application Page
 * @param props
 * @returns
 */
export const View: React.FC<IView> = (props) => {
  return (
    <div id={props.id} className={styles.view}>
      {LayoutUtils.instanceOfLayoutGridCols(props.layout) ? (
        <GridCols {...props.layout}></GridCols>
      ) : (
        <GridRows {...props.layout}></GridRows>
      )}
    </div>
  );
};
