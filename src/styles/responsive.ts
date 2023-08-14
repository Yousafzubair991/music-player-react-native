import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
export const RH = (val: number) => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};
export const RW = (val: number) => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = (val: number) => {
  const baseWidth = 300; // Use a base width where your design looks good on
  const factor = width / baseWidth;
  const size = PixelRatio.roundToNearestPixel(val * factor);
  return size;
};

export const RR = (val: number) => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};
