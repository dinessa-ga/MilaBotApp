import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        margin: 3,
        
    },
    cardImage: {
        width: 85,
        height: 85,
        resizeMode: 'cover', // 'objectFit' no es una propiedad válida en React Native, usa 'resizeMode'
    },
    cardLogo: {
        width: 130, // Define un ancho para el logo
        height: 130, // Define una altura para el logo
        resizeMode: 'contain', // Asegúrate de que el logo se ajuste dentro de las dimensiones sin deformarse
        marginLeft: 10, // Agrega un margen a la izquierda para separarlo del texto
    },
    cardContent: {
        flexDirection: 'row',
        padding: 5, // Agrega un relleno al contenido de la tarjeta
    },
    nameLogoContainer: {
        flexDirection: 'row', // Organiza el nombre y el logo horizontalmente
        alignItems: 'center', // Centra los elementos verticalmente en su contenedor
    },
    cardTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ajusta esto según necesites
    },
    cardTextTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
         
    },
    bodylarge: {
        
    },
    cardTitle: {

    }
});
