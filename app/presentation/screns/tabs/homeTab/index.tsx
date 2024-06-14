import { PieChart } from "react-native-gifted-charts";

import { globlalStyles } from '@/constants/GlobalStyles';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, List, Text, useTheme } from 'react-native-paper';

const pieData = [
  {
    value: 100,
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
  },
  { value: 400, color: '#93FCF8', gradientCenterColor: '#3BE9DE' },
  { value: 100, color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
  { value: 183, color: '#FFA5BA', gradientCenterColor: '#FF7F97' },
];
const HomeTap = () => {
  const theme = useTheme();
  const { experianPurple, outline } = theme.colors;
  return (
    <View style={globlalStyles.padding}>

      <Text variant="titleLarge" style={{ color: experianPurple }}>
        Tu puntaje de Crédito
      </Text>
      <Text variant="titleMedium" style={{ color: outline }}>
        Conoce tu perfil crediticio y puntaje en Datacrédito.
      </Text>

      <View style={[globlalStyles.justifyCenter, { marginTop: 10 }]} >
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
          innerCircleColor={experianPurple}
          centerLabelComponent={() =>
          (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                783
              </Text>
              <Text style={{ fontSize: 14, color: 'white' }}>Puntos</Text>
            </View>
          )
          }
        />
        <Text variant="titleMedium" style={{ color: outline }}>
          Puedes estar tranquilo !
        </Text>
        <Text variant="titleMedium" style={{ color: outline }}>
          Tu puntaje de crédito esta por encima del
          promedio de los colombianos.
        </Text>

        <Button
          style={{ marginTop: 10, }}
          mode="contained" theme={{ roundness: 5 }}
          buttonColor={experianPurple}
        >
          Ver diagnóstico
        </Button>

      </View>
      <View style={{ marginTop: 10 }}>
        <List.Accordion title="Cuentas Abiertas" titleStyle={{ color: experianPurple }}>
        </List.Accordion>
        <List.Accordion title="Cuentas Cerradas" titleStyle={{ color: experianPurple }}>
        </List.Accordion>
      </View>
    </View>
  )
};

export default HomeTap;

