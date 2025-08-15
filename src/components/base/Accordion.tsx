import { type ReactNode, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/hooks';

import { BORDER_RADIUS, SPACING } from '@/lib/theme-config';

import HtmlViewer from '../HtmlViewver';
import { ChevronIcon } from '../icons';
import { Collapse } from './Collapse';

export default function Accordions({
  list,
}: {
  readonly list: { content: ReactNode; id: number; trigger: ReactNode }[];
}) {
  const { theme } = useTheme();
  const [openIds, setOpenIds] = useState<number[]>([-1]);

  const onPress = (id: number) => {
    setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
  };

  return (
    <View style={styles.container}>
      {list.map((el) => {
        const isActive = openIds.includes(el.id);
        return (
          <Pressable
            key={el.id}
            onPress={() => {
              onPress(el.id);
            }}
            style={[
              styles.item,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}
          >
            {typeof el.trigger === 'string' ? (
              <View style={styles.header}>
                <View style={styles.headerText}>
                  <HtmlViewer
                    baseStyle={{ color: theme.colors.text }}
                    htmlContent={el.trigger}
                    offset={1000}
                  />
                </View>
                <Arrow active={isActive} />
              </View>
            ) : (
              el.trigger
            )}

            <View style={styles.content}>
              <AccordionContent content={el.content} open={isActive} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

function AccordionContent({
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
function Arrow({ active }: { readonly active?: boolean }) {
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
    flex: 1,
    gap: SPACING.base,
    justifyContent: 'center',
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
