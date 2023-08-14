import { Text, View } from "react-native";

import { FontFamily } from "../config/fontFamily";
import React from "react";
import fontSize from "../config/fontSize";

const Home = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontSize?.ExtraSmall,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>
      <Text
        style={{
          fontSize: fontSize?.Small,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>
      <Text
        style={{
          fontSize: fontSize?.Medium,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>
      <Text
        style={{
          fontSize: fontSize?.Large,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>
      <Text
        style={{
          fontSize: fontSize?.ExtraLarge,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>

      <Text
        style={{
          fontSize: fontSize?.Huge,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>
      <Text
        style={{
          fontSize: fontSize?.ExtraHuge,
          fontFamily: FontFamily?.semiBold,
        }}
      >
        HOMEW
      </Text>
    </View>
  );
};

export default Home;
