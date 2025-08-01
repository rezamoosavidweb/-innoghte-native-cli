import type { ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

import type { TxKeyPath } from "@/share/lib/i18n";
import { translate } from "@/share/lib/i18n";

import { Text, View } from ".";

interface Props extends ViewProps {
  className?: string;
  tx?: TxKeyPath;
  borderClassName?: string;
}

export const Divider = ({ tx, borderClassName, ...props }: Props) => {
  return (
    <View {...props}>
      <View className="flex flex-row items-center gap-3">
        {!!tx && <Text className="!text-grayscale-500">{translate(tx)}</Text>}
        <View
          className={twMerge("flex-1 border-t border-dark-5", borderClassName)}
        ></View>
      </View>
    </View>
  );
};
