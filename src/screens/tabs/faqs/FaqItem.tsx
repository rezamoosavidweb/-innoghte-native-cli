import { ReactNode, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/hooks';

import { View } from '@/components/base';
import { Collapse } from '@/components/base/Collapse';
import HtmlViewer from '@/components/HtmlViewver';
import { ChevronIcon } from '@/components/icons';

import { BORDER_RADIUS, SPACING } from '@/lib/theme-config';

export function AccordionContent({
  content,
  open,
}: {
  readonly content: ReactNode;
  readonly open: boolean;
}) {
  const { theme } = useTheme();
  return (
    <Collapse isExpanded={open} viewKey="Accordion">
      {typeof content === 'string' ? (
        <View
          style={[
            styles.htmlContainer,
            { borderTopColor: theme.colors.border },
          ]}
        >
          <HtmlViewer
            baseStyle={{ color: theme.colors.text }}
            htmlContent={content}
            offset={132}
          />
        </View>
      ) : (
        content
      )}
    </Collapse>
  );
}

const ACTIVE_ANGLE = -90;
export function Arrow({ active }: { readonly active?: boolean }) {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    rotation.value = withTiming(active ? ACTIVE_ANGLE : 0, { duration: 300 });
  }, [active, rotation]);

  return (
    <Animated.View style={animatedStyle}>
      <ChevronIcon color="#ccc" height={12} width={12} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.base, // requires RN 0.71+. Otherwise simulate gap with ItemSeparatorComponent
    padding: SPACING.base,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
    maxWidth: '90%',
  },
  htmlContainer: {
    borderTopWidth: 1,
    marginTop: SPACING.base,
    paddingTop: SPACING.base,
  },
  item: {
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    overflow: 'hidden',
    padding: SPACING.base,
  },
});
