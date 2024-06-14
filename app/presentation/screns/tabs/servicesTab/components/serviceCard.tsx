import { Image, View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'
import { styles } from '../constants/styles';
import ServiceSchema from '../schemas/serviceSchema';


const ServiceCardComponent = ({ color, image, name, description }: ServiceSchema) => {
    const theme = useTheme();
    const { background } = theme.colors;

    return (
        
        <Card style={[styles.cardContainer, { backgroundColor: theme.colors[color] }]}>
            <Card.Content style={styles.cardContent}>
                <Card.Cover source={image}
                    style={styles.cardImage}
                />
                <View style={{ flex: 1 }} >
                    <Image source={name} style={styles.cardLogo} />
                    <Text variant="bodyLarge" style={{ color: background }}>
                        {description}
                    </Text>
                </View>
            </Card.Content>
        </Card>
        
    )
};

export default ServiceCardComponent;


