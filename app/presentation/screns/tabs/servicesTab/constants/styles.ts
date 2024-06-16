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
        width: 150, // Define un ancho para el logo
        height: 150, // Define una altura para el logo
        resizeMode: 'contain', // Asegúrate de que el logo se ajuste dentro de las dimensiones sin deformarse
        marginLeft: 10, // Agrega un margen a la izquierda para separarlo del texto
    },
    cardContent: {
        flexDirection: "column", // Cambia a 'column' para organizar los elementos verticalmente
        alignItems: "flex-start", // Alinea los elementos al inicio del contenedor
        padding: 20, // Agrega un relleno al contenido de la tarjeta
    },
    nameLogoContainer: {
        flexDirection: 'row', // Organiza el nombre y el logo horizontalmente
        alignItems: 'center', // Centra los elementos verticalmente en su contenedor
    },
    bodylarge: {
        
    },
    cardTitle: {

    }
});
