import { Text, View } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // This disables all headers globally
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default RootLayout
