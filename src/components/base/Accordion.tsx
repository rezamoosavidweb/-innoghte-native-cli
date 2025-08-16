/* eslint-disable react/jsx-no-constructed-context-values */
import type { PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';

import { createContext, useContext, useState } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const AccordionContext = createContext({
  accordionIsOpen: () => {},
  isOpen: false,
});

// type AccordionProvider = ContextType<typeof AccordionContext>;
type AnimatedComponentProps = PropsWithChildren<AnimatedProps<ViewProps>>;

// Internal Hook
const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within a Accordion.Provider');
  }

  return context;
};

function Always({ children, ...rest }: AnimatedComponentProps) {
  return <Content {...rest}>{children}</Content>;
}

function Collapsed({ children, ...rest }: AnimatedComponentProps) {
  const { isOpen } = useAccordion();

  if (isOpen) {
    return;
  }

  return <Content {...rest}>{children}</Content>;
}

const SPRING_DAMPING = 80;
const SPRING_STIFFNESS = 1000;
const ROTATION = 90;

function Content({ children, style, ...rest }: AnimatedComponentProps) {
  return (
    <Animated.View
      entering={FadeIn.springify()
        .damping(SPRING_DAMPING)
        .stiffness(SPRING_STIFFNESS)}
      exiting={FadeOut.springify()
        .damping(SPRING_DAMPING)
        .stiffness(SPRING_STIFFNESS)}
      layout={LinearTransition.springify()
        .damping(SPRING_DAMPING)
        .stiffness(SPRING_STIFFNESS)}
      style={[style, { overflow: 'hidden' }]}
      {...rest}
    >
      {children}
    </Animated.View>
  );
}

function Expanded({ children, ...rest }: AnimatedComponentProps) {
  const { isOpen } = useAccordion();

  if (!isOpen) {
    return;
  }

  return <Content {...rest}>{children}</Content>;
}

function Header({ children }: { readonly children: React.ReactNode }) {
  const { accordionIsOpen } = useAccordion();

  return (
    <AnimatedPressable
      onPress={() => {
        accordionIsOpen();
      }}
    >
      {children}
    </AnimatedPressable>
  );
}
function Icon({
  children,
  rotation = 'clockwise',
}: {
  readonly children: React.ReactNode;
  readonly rotation?: 'clockwise' | 'counter-clockwise';
}) {
  const { isOpen } = useAccordion();
  const rotate = useDerivedValue(() => {
    return withSpring(
      isOpen ? (rotation === 'clockwise' ? -1 : 1) * ROTATION : 0,
      {
        damping: SPRING_DAMPING,
        stiffness: SPRING_STIFFNESS,
      },
    );
  }, [isOpen, rotation]);

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      layout={LinearTransition.springify()
        .damping(SPRING_DAMPING)
        .stiffness(SPRING_STIFFNESS)}
      style={[
        {
          alignItems: 'center',
          height: 20,
          justifyContent: 'center',
          width: 20,
        },
        stylez,
      ]}
    >
      {children}
    </Animated.View>
  );
}

function Provider({
  children,
  isOpen: initialIsOpen,
  onChange,
  style,
  ...rest
}: {
  readonly children: React.ReactNode;
  readonly isOpen?: boolean;
  readonly onChange?: (value: boolean) => void;
} & AnimatedProps<ViewProps>) {
  const [isOpen, setIsOpen] = useState(!!initialIsOpen);
  return (
    <AccordionContext.Provider
      value={{
        accordionIsOpen: () => {
          onChange?.(!isOpen);
          setIsOpen((prev) => {
            return !prev;
          });
        },
        isOpen,
      }}
    >
      <Animated.View
        layout={LinearTransition.springify()
          .damping(SPRING_DAMPING)
          .stiffness(SPRING_STIFFNESS)}
        style={[style, { overflow: 'hidden' }]}
        {...rest}
      >
        {children}
      </Animated.View>
    </AccordionContext.Provider>
  );
}

function Sibling({ children, ...rest }: AnimatedComponentProps) {
  return (
    <Animated.View
      layout={LinearTransition.springify()
        .damping(SPRING_DAMPING)
        .stiffness(SPRING_STIFFNESS)}
      {...rest}
    >
      {children}
    </Animated.View>
  );
}

export const Accordion = {
  /**
   * The main component that will handle the state of the accordion.
   *
   * @param isOpen boolean
   * @param onChange (value: boolean) => void
   */
  Accordion: Provider,
  /**
   * The header of the accordion.
   */
  Header,
  /**
   * The component that will wrap any children and it will apply a rotation to it.
   *
   * @param children
   * @param rotation clockwise | counter-clockwise
   */
  HeaderIcon: Icon,
  /**
   * This is the content that will be displayed when the accordion is open
   */
  Expanded,
  /**
   * This is the content that will be displayed when the accordion is closed
   */
  Collapsed,
  /**
   * This is the content that will always be displayed
   */
  Always,
  /**
   *
   * This is a component that will add the layout transition to any
   * sibling components. Useful when you are rendering other components
   * that are not direct children of the Accordion component.
   */
  Sibling,
};

export default Accordion;
