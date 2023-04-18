import { IButton } from "@/types/components/widget";

/**
 * Button component
 * @param props
 * @returns
 */
export const Button: React.FC<IButton> = (props) => {
  console.log("BUTTON", props);
  return <div>BUTTON</div>;
};
