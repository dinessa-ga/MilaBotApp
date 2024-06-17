import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { useState } from 'react';

export default function App() {
  const theme = useTheme();
  const { experianPurple, outline } = theme.colors;
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoadEnd={() => setIsLoading(false)}
        style={styles.container}
        source={{ uri: 'https://webchat.chatlayer.ai/embedded/lxetxz91:666f79b9e24e0b5e7defccdc' }}
      />
      {
        isLoading &&
        <ActivityIndicator
          size='large'
          style={{ position: "absolute", top:"50%", left:"40%" }}
          animating={true} color={experianPurple} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
