import { useWindowDimensions } from "react-native";
import RenderHtml, {
  type MixedStyleDeclaration,
} from "react-native-render-html";

export default function HtmlViewer({
  htmlContent,
  baseStyle,
  offset = 0,
}: {
  htmlContent: string;
  baseStyle: MixedStyleDeclaration;
  offset?: number;
}) {
  const { width } = useWindowDimensions();

  return (
    <RenderHtml
      contentWidth={width - offset}
      source={{ html: htmlContent }}
      baseStyle={baseStyle}
    />
  );
}
