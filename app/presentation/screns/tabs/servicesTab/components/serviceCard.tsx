import { View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'
import { styles } from '../constants/styles';
import ServiceSchema from '../schemas/serviceSchema';


const ServiceCardComponent = ({ color, image, name, description }: ServiceSchema) => {
    const theme = useTheme();
    const { background } = theme.colors;

    return (

        <Card style={[styles.cardContainer, { backgroundColor: theme.colors[color] }]}>
            <Card.Content style={styles.cardContent}>
                <Card.Cover source={{ uri: image }}
                    style={styles.cardImage}
                />
                <View style={{ flex: 1 }} >
                    <View style={styles.cardTextContainer}>

                        <Text variant="titleSmall" style={[{ color: background }, styles.cardTitle, styles.id_cardTitle]}>{name}</Text>
                        <Text variant="titleSmall"
                            style={[
                                styles.cardTitle,
                                styles.cardBorderTextMargin,
                                {
                                    color: theme.colors[color],
                                    backgroundColor: background,
                                    
                                }
                            ]}>Mi</Text>
                        <Text variant="titleSmall" style={[{ color: background }, styles.cardSubtitle]}>DataCredito</Text>

                    </View>
                    <Text variant="bodyLarge" style={{ color: background }}>
                        {description}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    )
};

export default ServiceCardComponent;


