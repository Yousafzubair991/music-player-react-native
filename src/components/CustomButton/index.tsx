import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { RH, RW } from "../../styles/responsive";

import { FontFamily } from "../../config/fontFamily";
import { ICustomButton } from "../../config/types";
import React from "react";
import colors from "../../config/colors";

const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  width,
  height,
  loading,
  disabled,
  textColor,
  maxWidth,
  marginVertical,
  borderColor,
  borderWidth,
  borderRadius,
  alignSelf,
  fontSize,
}: ICustomButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.wrapper,
        {
          backgroundColor: disabled
            ? colors.trapsparentPrimary
            : backgroundColor
            ? backgroundColor
            : colors.primary,
          width: width ? width : RW(45),
          height: height ? height : RH(5.3),
          marginVertical: marginVertical ? marginVertical : 10,
          marginHorizontal: 5,
          borderColor: borderColor ? borderColor : null,
          borderWidth: borderWidth ? borderWidth : 0,
          borderRadius: borderRadius ? borderRadius : 100,
          alignSelf: alignSelf ? alignSelf : "center",
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor ? textColor : colors.white} />
      ) : (
        <Text
          style={[
            {
              fontSize: fontSize ? fontSize : fontSize?.Normal,
              fontFamily: FontFamily?.regular,
              letterSpacing: 1,
              color: disabled
                ? colors.black
                : textColor
                ? textColor
                : colors.white,
            },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
    borderRadius: 7,
    overflow: "hidden",
  },
});

export default CustomButton;
