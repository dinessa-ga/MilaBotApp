import { Image, View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'
import { styles } from '../constants/styles';
import ServiceSchema from '../schemas/serviceSchema';


const ServiceCardComponent = (service) => {
    const theme = useTheme();
    const { background } = theme.colors;

    return (
        <Card style={[styles.cardContainer, { backgroundColor: theme.colors[service.color] }]}>
            <Card.Content style={styles.cardContent}>
                <Card.Cover source={service.image}
                    style={styles.cardImage}
                />
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', styles.id_cardTitle}} >
                    <View variant="card_titles">
                        <Text variant="bodyLarge" style={{ color: background }}>
                            {service.name}
                        </Text>
                        <Image source={require('../assets/logo_midc_white.svg')} style={styles.cardLogo} />
                    </View>
                    <Text variant="large_description" style={{ color: background }}>
                    {service.description}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    );
};

export default ServiceCardComponent;


