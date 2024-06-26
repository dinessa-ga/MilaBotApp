import {  ScrollView, View } from 'react-native';
import {  FAB, Text, useTheme } from 'react-native-paper';
import ServiceCardComponent from './components/serviceCard';
import { services } from './constants/servicesInfo';
import { globlalStyles } from '@/constants/GlobalStyles';
import { router } from 'expo-router';
const ServicesTab = () => {
    const theme = useTheme();
    const { experianPurple, outline } = theme.colors;

    const onHandleClick = ( ) => {
        router.push('/chat')
    }
    return (

        <View style={[globlalStyles.safeAreaStyle,
        globlalStyles.padding]}>
            <Text variant="titleLarge"
                style={{ color: experianPurple }}>
                Otros servicios
            </Text>
            <Text variant="titleMedium" style={{ color: outline }}>
                Conoce más de nuestros servicios para mejorar tu vida financiera
            </Text>
            <ScrollView>
                {
                    services.map((service) => (
                        <ServiceCardComponent {...service} key={service.name} />
                    ))
                }
            </ScrollView>
            <FAB
                icon="robot-love"
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                onPress={onHandleClick}
            />
        </View>
    )
};

export default ServicesTab;


