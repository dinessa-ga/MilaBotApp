import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardContainer: {
        margin: 20
    },
    cardImage: {
        width: 100,
        height: 100,
        objectFit:'cover'
    },
    cardLogo: {
        marginBottom: 10
    },
    cardContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
    },

});

