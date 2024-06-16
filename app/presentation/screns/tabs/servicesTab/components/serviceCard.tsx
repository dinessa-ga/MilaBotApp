import { Image, View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'
import { styles } from '../constants/styles';



const ServiceCardComponent = (service) => {
    const theme = useTheme();
    const { background } = theme.colors;

    return (
        <Card style={[styles.cardContainer, { backgroundColor: theme.colors[service.color] }]}>
            <Card.Content style={styles.cardContent}>
                <Card.Cover source={service.image}
                    style={styles.cardImage}
                />
                <View style={[styles.cardTextContainer]} >
                        <Image source={service.name} style={styles.cardLogo} />
                    <Text style={[styles.cardDescription, { color: background, fontSize: 14}]}>
                        {service.description}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    );
};

export default ServiceCardComponent;


