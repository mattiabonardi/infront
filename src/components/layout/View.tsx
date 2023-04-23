import { IView } from "@/types/layout/view";
import styles from "@/styles/layout.module.css";
import { Grid } from "./Grid";
import { setViewport } from "@/store/reduces/general";
import { Device } from "@/types/general";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * View, the Dynamic Application Page
 * @param props
 * @returns
 */
export const View: React.FC<IView> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const saveViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let device: Device;
      if (width < Device.SM) {
        device = Device.DEFAULT;
      } else if (width < Device.MD) {
        device = Device.SM;
      } else if (width < Device.LG) {
        device = Device.MD;
      } else if (width < Device.XL) {
        device = Device.LG;
      } else if (width < Device.XXL) {
        device = Device.XL;
      } else {
        device = Device.XXL;
      }
      dispatch(
        setViewport({
          viewport: {
            width,
            height,
            device,
          },
        })
      );
    };
    window.addEventListener("resize", saveViewport);
    saveViewport();
    return () => window.removeEventListener("resize", saveViewport);
  }, [dispatch]);

  return (
    <div id={props.id} className={styles.view}>
      <Grid {...props.layout}></Grid>
    </div>
  );
};
