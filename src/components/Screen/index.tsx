import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";

import React from "react";
import colors from "../../config/colors";

const Screen = (props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors?.white,
        }}
      >
        {props.children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Screen;
