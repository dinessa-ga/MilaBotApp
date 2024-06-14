/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { MD3LightTheme as DefaultTheme, MD3LightTheme as DarkTheme } from 'react-native-paper';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const backgroundLight = '#fff'
const experianPurpleLight = 'rgb(127, 72, 147)';
const experianVioletLight = 'rgb(126, 72, 149)';
const experianBlueLight = 'rgb(50, 92, 168)';
const experianPinkLight = 'rgb(158, 55, 116)';
const experianPurpleDark = 'rgb(237, 177, 255)';
const experianVioletDark = 'rgb(234, 178, 255)';
const experianBlueDark = 'rgb(174, 198, 255)';
const experianPinkDark = 'rgb(255, 175, 213)';
const backgroundDark = '#151718';

export const Colors = {
  light: {
    text: '#11181C',
    background: backgroundLight,
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    experianBlue: experianBlueLight,
    experianViolet: experianVioletLight,
    experianPurple: experianPurpleLight,
    experianPink: experianPinkLight,
    safeArea: "#f2f2f2"
  },
  dark: {
    text: '#ECEDEE',
    background: backgroundDark,
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    experianBlue: experianBlueDark,
    experianViolet: experianVioletDark,
    experianPurple: experianPurpleDark,
    experianPink: experianPinkDark,
    safeArea: '#0000'
  },
};


export const PaperTheme = {
  light: {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      experianBlue: experianBlueLight,
      onExperianBlue: "rgb(255, 255, 255)",
      experianBlueContainer: "rgb(216, 226, 255)",
      onExperianBlueContainer: "rgb(0, 26, 66)",
      experianViolet: experianVioletLight,
      onExperianViolet: "rgb(255, 255, 255)",
      experianVioletContainer: "rgb(247, 216, 255)",
      onExperianVioletContainer: "rgb(49, 0, 71)",
      experianPurple: experianPurpleLight,
      onExperianPurple: "rgb(255, 255, 255)",
      experianPurpleContainer: "rgb(249, 216, 255)",
      onExperianPurpleContainer: "rgb(50, 0, 70)",
      experianPink: experianPinkLight,
      onExperianPink: "rgb(255, 255, 255)",
      experianPinkContainer: "rgb(255, 216, 232)",
      onExperianPinkContainer: "rgb(61, 0, 39)",
      experianYellow: "rgb(128, 86, 0)",
      onExperianYellow: "rgb(255, 255, 255)",
      experianYellowContainer: "rgb(255, 221, 176)",
      onExperianYellowContainer: "rgb(40, 24, 0)",
      background: backgroundLight
    },
  },
  dark: {
    ...DarkTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DarkTheme.colors,
      experianBlue: experianBlueDark,
      onExperianBlue: "rgb(0, 46, 106)",
      experianBlueContainer: "rgb(18, 68, 143)",
      onExperianBlueContainer: "rgb(216, 226, 255)",
      experianViolet: experianVioletDark,
      onExperianViolet: "rgb(75, 23, 99)",
      experianVioletContainer: "rgb(100, 48, 123)",
      onExperianVioletContainer: "rgb(247, 216, 255)",
      experianPurple: experianPurpleDark,
      onExperianPurple: "rgb(76, 22, 97)",
      experianPurpleContainer: "rgb(101, 47, 122)",
      onExperianPurpleContainer: "rgb(249, 216, 255)",
      experianPink: experianPinkDark,
      onExperianPink: "rgb(98, 0, 66)",
      experianPinkContainer: "rgb(128, 29, 91)",
      onExperianPinkContainer: "rgb(255, 216, 232)",
      experianYellow: "rgb(254, 186, 75)",
      onExperianYellow: "rgb(68, 44, 0)",
      experianYellowContainer: "rgb(97, 64, 0)",
      onExperianYellowContainer: "rgb(255, 221, 176)",
      background: backgroundDark
    },
  }

}