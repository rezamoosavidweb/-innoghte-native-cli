import type { FastImageProps } from "react-native-fast-image";
import FastImage from "react-native-fast-image";
import { cssInterop } from "nativewind";
import * as React from "react";

export type ImgProps = FastImageProps & {
  className?: string;
  placeholder?: string;
};

cssInterop(FastImage, { className: "style" });

export const Image = ({
  style,
  className,
  placeholder = "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  ...props
}: ImgProps) => {
  return <FastImage className={className} style={style} {...props} />;
};

export const preloadImages = (sources: string[]) => {
  FastImage.preload(sources.map((source) => ({ uri: source })));
};
