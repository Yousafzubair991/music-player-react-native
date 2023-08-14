import { FontFamily } from "../config/fontFamily";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import fontSize from "../config/fontSize";

export const GlobalTextStyles = StyleSheet.create({
  h1_Primary: {
    fontSize: fontSize?.ExtraLarge,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  h2_Primary: {
    fontSize: fontSize?.Large,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  h3_Primary: {
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  h4_Primary: {
    fontSize: fontSize?.Small,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  body_Primary: {
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.regular,
    color: colors?.primary,
  },
  h1_Black: {
    fontSize: fontSize?.ExtraLarge,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  h2_Black: {
    fontSize: fontSize?.Large,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  h3_Black: {
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  h4_Black: {
    fontSize: fontSize?.Small,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  body_Black: {
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.regular,
    color: colors?.black,
  },
  /////////////////////////////////
  h1_Primary_center: {
    alignSelf: "center",
    fontSize: fontSize?.ExtraLarge,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  h2_Primary_center: {
    alignSelf: "center",
    fontSize: fontSize?.Large,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  h3_Primary_center: {
    alignSelf: "center",
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  h4_Primary_center: {
    alignSelf: "center",
    fontSize: fontSize?.Small,
    fontFamily: FontFamily?.bold,
    color: colors?.primary,
  },
  body_Primary_center: {
    alignSelf: "center",
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.regular,
    color: colors?.primary,
  },
  h1_Black_center: {
    alignSelf: "center",
    fontSize: fontSize?.ExtraLarge,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  h2_Black_center: {
    alignSelf: "center",
    fontSize: fontSize?.Large,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  h3_Black_center: {
    alignSelf: "center",
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  h4_Black_center: {
    alignSelf: "center",
    fontSize: fontSize?.Small,
    fontFamily: FontFamily?.bold,
    color: colors?.black,
  },
  body_Black_center: {
    alignSelf: "center",
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.regular,
    color: colors?.black,
  },
  h1_Secondary: {
    fontSize: fontSize?.ExtraLarge,
    fontFamily: FontFamily?.bold,
    color: colors?.secondary,
  },
  h2_Secondary: {
    fontSize: fontSize?.Large,
    fontFamily: FontFamily?.bold,
    color: colors?.secondary,
  },
  h3_Secondary: {
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.bold,
    color: colors?.secondary,
  },
  h4_Secondary: {
    fontSize: fontSize?.Small,
    fontFamily: FontFamily?.bold,
    color: colors?.secondary,
  },
  body_Secondary: {
    fontSize: fontSize?.Normal,
    fontFamily: FontFamily?.regular,
    color: colors?.secondary,
  },
});
