import React from 'react';
import { Stack } from 'expo-router';
//importing Tailwind
import 'nativewind';

// importing Header 
import AppHeader from '@/components/AppHeader';

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="screens/home"
        options={{ header: () => <AppHeader /> }}
      />
    </Stack>
  );
}