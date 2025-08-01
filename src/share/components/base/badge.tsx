import { twMerge } from "tailwind-merge";

import { Text, View } from "@/share/components/base";

interface Props {
  title: string;
  textClassName?: string;
  className?: string;
}
export default function Badge({ textClassName, className, title }: Props) {
  return (
    <View className={twMerge("rounded-md px-2 py-1 bg-[#F8930014]", className)}>
      <Text className={textClassName}>{title}</Text>
    </View>
  );
}
