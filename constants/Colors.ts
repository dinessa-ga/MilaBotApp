/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { MD3LightTheme as DefaultTheme, MD3LightTheme as DarkTheme } from 'react-native-paper';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const experianPurpleLight = 'rgb(142, 60, 150)';
const experianVioletLight = 'rgb(107, 79, 162)';
const experianBlueLight = 'rgb(78, 87, 169)';
const experianPinkLight = 'rgb(174, 21, 132)';
const experianPurpleDark = 'rgb(189, 194, 255)';
const experianVioletDark = 'rgb(211, 187, 255)';
const experianBlueDark = 'rgb(253, 169, 255)';
const experianPinkDark = 'rgb(255, 174, 219)';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    experianBlue: experianBlueLight,
    experianViolet: experianVioletLight,
    experianPurple: experianPurpleLight,
    experianPink: experianPinkLight
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    experianBlue: experianBlueDark,
    experianViolet: experianVioletDark,
    experianPurple: experianPurpleDark,
    experianPink: experianPinkDark
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
      experianBlueContainer: "rgb(224, 224, 255)",
      onExperianBlueContainer: "rgb(2, 8, 101)",
      experianViolet: experianVioletLight,
      onExperianViolet: "rgb(255, 255, 255)",
      experianVioletContainer: "rgb(234, 221, 255)",
      onExperianVioletContainer: "rgb(37, 0, 90)",
      experianPurple: experianPurpleLight,
      onExperianPurple: "rgb(255, 255, 255)",
      experianPurpleContainer: "rgb(255, 214, 251)",
      onExperianPurpleContainer: "rgb(54, 0, 61)",
      experianPink: experianPinkLight,
      onExperianPink: "rgb(255, 255, 255)",
      experianPinkContainer: "rgb(255, 216, 234)",
      onExperianPinkContainer: "rgb(60, 0, 43)"
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
      onExperianBlue: "rgb(30, 38, 120)",
      experianBlueContainer: "rgb(54, 62, 144)",
      onExperianBlueContainer: "rgb(224, 224, 255)",
      experianViolet: experianVioletDark,
      onExperianViolet: "rgb(59, 29, 113)",
      experianVioletContainer: "rgb(82, 54, 137)",
      onExperianVioletContainer: "rgb(234, 221, 255)",
      experianPurple: experianPurpleDark,
      onExperianPurple: "rgb(88, 0, 99)",
      experianPurpleContainer: "rgb(115, 34, 124)",
      onExperianPurpleContainer: "rgb(255, 214, 251)",
      experianPink: experianPinkDark,
      onExperianPink:"rgb(97, 0, 72)",
      experianPinkContainer: "rgb(136, 0, 102)",
      onExperianPinkContainer: "rgb(255, 216, 234)"
    },
  }

}