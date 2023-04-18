import { IText } from "@/types/components/widget";

/**
 * Text component
 * @param props
 * @returns
 */
export const Text: React.FC<IText> = (props) => {
  console.log("TEXT", props);
  return <div>TEXT</div>;
};
