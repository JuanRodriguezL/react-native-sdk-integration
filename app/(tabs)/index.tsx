import React from 'react';
import { Button, NativeModules, Platform, View } from 'react-native';

const { PanSdkModule } = NativeModules;

export default function HomeScreen() {
  const handlePress = () => {
    if (!PanSdkModule) {
      console.warn("❌ PanSdkModule no está disponible.");
      return;
    }

    if (Platform.OS === 'ios' && PanSdkModule.showPanForm) {
      PanSdkModule.showPanForm();
    } else if (Platform.OS === 'android' && PanSdkModule.show) {
      PanSdkModule.show();
    } else {
      console.warn("❌ Método no disponible en esta plataforma.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mostrar SDK" onPress={handlePress} />
    </View>
  );
}
