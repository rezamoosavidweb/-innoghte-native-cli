import { useWindowDimensions } from 'react-native';
import RenderHtml, {
  type MixedStyleDeclaration,
} from 'react-native-render-html';

export default function HtmlViewer({
  baseStyle,
  htmlContent,
  offset = 0,
}: {
  readonly baseStyle: MixedStyleDeclaration;
  readonly htmlContent: string;
  readonly offset?: number;
}) {
  const { width } = useWindowDimensions();

  return (
    <RenderHtml
      baseStyle={baseStyle}
      contentWidth={width - offset}
      source={{ html: htmlContent }}
    />
  );
}
