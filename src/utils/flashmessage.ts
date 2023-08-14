import { FontFamily } from "../config/fontFamily";
import colors from "../config/colors";
import { showMessage } from "react-native-flash-message";

interface options {
  duration: number;
  animated: boolean;
  hideStatusBar: boolean;
  animationDuration?: number;
  floating: boolean;
  position: "top" | "bottom";
  textStyle: { fontFamily: string };
  titleStyle: { fontFamily: string };
}
interface flashMessage {
  message: string;
  description: string;
}
const options: options = {
  duration: 4000,
  animated: true,
  hideStatusBar: false,
  animationDuration: 400,
  floating: true,
  position: "top",
  textStyle: { fontFamily: FontFamily?.regular },
  titleStyle: { fontFamily: FontFamily?.bold },
};
export const errorFlash = (message: string, description: string) => {
  showMessage({
    message: message,
    description: description,
    type: "danger",
    icon: "danger",
    ...options,
  });
};

export const successFlash = (message: string, description: string) => {
  showMessage({
    message: message,
    description: description,
    type: "success",
    icon: "success",
    ...options,
  });
};

export const warningFlash = (message: string, description: string) => {
  showMessage({
    message: message,
    description: description,
    type: "warning",
    icon: "warning",
    ...options,
  });
};

export const infoFlash = (message: string, description: string) => {
  showMessage({
    message: message,
    description: description,
    type: "info",
    icon: "info",
    ...options,
  });
};

export const primaryFlash = (message: string, description: string) => {
  showMessage({
    message: message,
    description: description,
    type: "success",
    icon: "success",
    backgroundColor: colors?.primary,
    animationDuration: 3000,
    ...options,
  });
};
