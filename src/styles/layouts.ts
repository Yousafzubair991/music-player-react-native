import { StyleSheet } from "react-native";

export const Layouts = StyleSheet.create({
  rowCenter: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  rowSpaceBetween: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  rowSpaceAround: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  rowSpaceEvenly: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  rowFlexStart: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  rowFlexEnd: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  rowCenterTop: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
});
