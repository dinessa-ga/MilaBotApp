import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardSubtitle: {
        padding: 5,
        fontSize: 10,

    },
    cardTitle: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 10
    },
    cardContainer: {
        margin: 20
    },
    cardImage: {
        width: 100,
        height: 100
    },
    cardBorderTextMargin: {
        marginLeft: -15,
        //Add
        paddingRight: 10
    },
    cardTextContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10
    },
    cardContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
    },

    id_cardTitle: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 20
    }

});

