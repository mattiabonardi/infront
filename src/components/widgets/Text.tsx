/* eslint-disable react/no-children-prop */
import { IText } from "@/types/components/widget";
import ReactMarkdown from "react-markdown";

/**
 * Text component
 * @param props
 * @returns
 */
export const Text: React.FC<IText> = (props) => {
  return <ReactMarkdown children={props.data.value as string} />;
};
