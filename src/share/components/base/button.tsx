import React from "react";
import type { PressableProps, View } from "react-native";
import { ActivityIndicator, Pressable, Text } from "react-native";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const button = tv({
  slots: {
    container:
      "flex flex-row items-center justify-center rounded-md px-4 transition-all",
    label: "font-inter text-base font-semibold",
    indicator: "h-6 text-white",
  },

  variants: {
    variant: {
      outline: {
        container: "",
        label: "",
        indicator: "",
      },
      fill: {
        container: "",
        label: "",
        indicator: "",
      },
      text: {
        container: "",
        label: "",
        indicator: "",
      },
    },
    color: {
      secondary: {
        container: "",
        label: "",
        indicator: "",
      },
      dark: {
        container: "",
        label: "",
        indicator: "",
      },
      success: {
        container: "",
        label: "",
        indicator: "",
      },
      danger: {
        container: "",
        label: "",
        indicator: "",
      },
    },
    size: {
      default: {
        container: "h-10 px-4",
        label: "text-base",
      },
      lg: {
        container: "h-12 px-8",
        label: "text-xl",
      },
      sm: {
        container: "h-8 px-3",
        label: "text-sm",
        indicator: "h-2",
      },
      icon: { container: "size-9" },
    },
    disabled: {
      true: {
        container: "bg-neutral-300 dark:bg-neutral-300",
        label: "text-neutral-600 dark:text-neutral-600",
        indicator: "text-neutral-400 dark:text-neutral-400",
      },
    },
    fullWidth: {
      true: {
        container: "w-full",
      },
      false: {
        container: "self-center",
      },
    },
    solid: {
      true: {
        container: "",
      },
      false: {
        container: "",
      },
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      color: "dark",
      solid: true,
      className: {
        container:
          "border border-grayscale-400 dark:border-dark-1 dark:active:border-dark-1",
        label: "dark:text-white",
        indicator: "dark:text-white",
      },
    },
    {
      variant: "outline",
      color: "dark",
      solid: false,
      className: {
        container:
          "border border-grayscale-400 dark:border-dark-1 dark:active:border-dark-1",
        label: "text-white",
        indicator: "text-white",
      },
    },
    {
      variant: "outline",
      color: "secondary",
      solid: true,
      className: {
        container: "border border-secondary-800",
        label: "text-secondary-800",
        indicator: "text-secondary-800",
      },
    },
    {
      variant: "outline",
      color: "secondary",
      solid: false,
      className: {
        container: "border border-secondary-800 active:border-secondary-950",
        label: "text-secondary-800 active:text-secondary-950",
        indicator: "text-secondary-800 active:text-secondary-950",
      },
    },
    {
      variant: "fill",
      color: "dark",
      solid: true,
      className: {
        container: "bg-dark-1",
        label: "text-white",
      },
    },
    {
      variant: "fill",
      color: "dark",
      solid: false,
      className: {
        container: "bg-dark-1 active:bg-dark-3",
        label: "text-white",
      },
    },
    {
      variant: "fill",
      color: "secondary",
      solid: true,
      className: {
        container: "bg-secondary-800 dark:bg-secondary-800",
        label: "text-white",
      },
    },
    {
      variant: "fill",
      color: "secondary",
      solid: false,
      className: {
        container: "bg-secondary-800 active:bg-secondary-950",
        label: "text-white",
      },
    },
    {
      variant: "fill",
      color: "success",
      solid: true,
      className: {
        container: "bg-success-800 dark:bg-success-800",
        label: "text-white",
      },
    },
    {
      variant: "fill",
      color: "success",
      solid: false,
      className: {
        container: "bg-success-800 active:bg-success-950",
        label: "text-white",
      },
    },
  ],

  defaultVariants: {
    variant: "outline",
    disabled: false,
    fullWidth: true,
    size: "default",
  },
});

type ButtonVariants = VariantProps<typeof button>;
interface Props extends ButtonVariants, Omit<PressableProps, "disabled"> {
  label?: string;
  loading?: boolean;
  solid?: boolean;
  className?: string;
  textClassName?: string;
}

export const Button = React.forwardRef<View, Props>(
  (
    {
      label: text,
      loading = false,
      variant = "outline",
      disabled = false,
      size = "default",
      className = "",
      testID,
      textClassName = "",
      color,
      solid = false,
      ...props
    },
    ref,
  ) => {
    const styles = React.useMemo(
      () => button({ variant, color, disabled, size, solid }),
      [variant, color, disabled, size, solid],
    );

    return (
      <Pressable
        disabled={disabled || loading}
        className={styles.container({ className })}
        {...props}
        ref={ref}
        testID={testID}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            {loading ? (
              <ActivityIndicator
                size="small"
                className={styles.indicator()}
                testID={testID ? `${testID}-activity-indicator` : undefined}
              />
            ) : (
              <Text
                testID={testID ? `${testID}-label` : undefined}
                className={styles.label({ className: textClassName })}
              >
                {text}
              </Text>
            )}
          </>
        )}
      </Pressable>
    );
  },
);
