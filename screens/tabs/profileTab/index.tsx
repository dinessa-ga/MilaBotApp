import { globlalStyles } from '@/constants/GlobalStyles';
import {
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
import { Avatar, List, Text, useTheme } from 'react-native-paper';
import { ProfileInfo, userData } from './constants/profileInfo';
import { styles } from './constants/styles';

const ProfileTab = () => {
    const theme = useTheme();
    const { experianPink, experianViolet, background, outline } = theme.colors;
    return (
        <View style={globlalStyles.safeAreaStyle}>
            <View
                style={[globlalStyles.justifyCenter,
                { padding: 24 }]}>
                <TouchableOpacity>
                    <View style={styles.profileAvatarWrapper}>
                        <Avatar.Icon size={72} icon="account-circle"
                            style={{ backgroundColor: experianViolet }} />
                        <Avatar.Icon size={28} icon="pencil"
                            style={[{ backgroundColor: experianPink }, styles.profileAction]} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.profileName}>Mi Perfil</Text>
                <Text style={styles.profileAccountName}>
                    Usuario MilaBot
                </Text>
            </View>

            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Datos de Contacto</Text>

                    {
                        Object.entries(ProfileInfo).map(([key, info]) => (
                            <List.Item
                                key={info.title}
                                titleStyle={{ color: outline }}
                                descriptionStyle={{ color: outline }}
                                style={[styles.row, { backgroundColor: background }]}
                                title={info.title}
                                description={userData[key]}
                                left={props => <List.Icon {...props}
                                    color={theme.colors[info.color]}
                                    icon={info.icon} />}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileTab;


