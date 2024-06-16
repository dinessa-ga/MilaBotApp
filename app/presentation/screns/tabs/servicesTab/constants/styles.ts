import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        
    },
    cardImage: {
        width: 85,
        height: 85,
        resizeMode: 'cover', // 'objectFit' no es una propiedad válida en React Native
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
        
    },
    cardTextTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -40
         
    },
   
    cardTitle: {
        borderColor: '#fff',
        borderWidth: 1,
        paddingTop: 4,
        borderRadius: 7,
        paddingLeft: 10,
        paddingRight: 20,
        height: 28,
        elevation: -1        
    },
    cardLogo: {
        width: 130, 
        height: 130, 
        resizeMode: 'contain', // Asegura que el logo se ajuste dentro de las dimensiones sin deformarse
        marginLeft: -25, 
        
    },
    cardDescription:{
        marginTop: -35,//estas medidas son necesarias para  la descripción de las card
        marginRight: 10,
        paddingRight: 60,
        
    }
});
