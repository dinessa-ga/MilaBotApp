import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        marginTop: 20
    },
    cardImage: {
        width: 85,
        height: 85,
        resizeMode: 'cover',
        marginTop: 10,
        marginBottom: 10
    },
    cardContent: {
        flexDirection: 'row',
        padding: 5, 
    },
    cardTextContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        paddingLeft: 10
        // ... otros estilos
    },
       
    cardLogo: {
        width: 175, 
        resizeMode: 'contain', 
        
    },
    cardDescription:{
        marginTop:10,         // son necesarios para que encaje en el contener sin sobresalirse
        marginRight: 10,
        paddingRight: 70,
    }
});

