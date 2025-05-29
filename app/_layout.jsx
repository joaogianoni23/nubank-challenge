import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  // Impedir o comportamento de voltar ao pressionar o botão de voltar físico
  // Isso ajuda a garantir que o app sempre inicie na página principal
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
    return () => backHandler.remove();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          gestureEnabled: true,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
            gestureEnabled: false 
          }} 
        />
        <Stack.Screen 
          name="pix" 
          options={{ 
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="investimentos" 
          options={{ 
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="shopping" 
          options={{ 
            headerShown: false 
          }} 
        />
      </Stack>
    </GestureHandlerRootView>
  );
}