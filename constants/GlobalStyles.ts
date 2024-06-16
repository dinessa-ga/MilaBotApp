import { Platform, StyleSheet } from "react-native";

export const globlalStyles = StyleSheet.create({

    safeAreaStyle: {
        padding: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    
    },
    padding: {
        padding: 10
    },
    justifyCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})