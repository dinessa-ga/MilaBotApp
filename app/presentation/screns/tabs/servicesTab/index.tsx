import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import ServiceCardComponent from './components/serviceCard';
import { services } from './constants/servicesInfo';
import { styles } from './constants/styles';

const ServicesTab = () => {
    const theme = useTheme();
    const { background, experianPurple, outline } = theme.colors;
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <Text variant="titleLarge" style={{ color: experianPurple }}>Otros servicios</Text>
                    <Text variant="titleMedium" style={{ color: outline }}>Conoce más de nuestros servicios para mejorar tu vida financiera</Text>

                    {
                        services.map((service) => (
                            <ServiceCardComponent {...service} key={service.name} />
                        ))
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default ServicesTab;


