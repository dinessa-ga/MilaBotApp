import { SafeAreaView, ScrollView, View } from 'react-native';
import ServiceCardComponent from './components/serviceCard';
import { services } from './constants/servicesInfo';


const ServicesTab = () => {

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                {
                    services.map((service) => (
                        <ServiceCardComponent {...service} key={service.name} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
};

export default ServicesTab;


