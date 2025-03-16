import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function _layout() {
  return (
   <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton tintColor='#000' />}}>
   <Tabs.Screen name='calendar' options={{
      tabBarIcon: ({color}) => (
        <Feather name="calendar" size={24} color={color} />
      ),
      tabBarLabel: 'Kalender',
      headerTitle: 'Kalender'
      //headerRight: () => <Button onPress={() => router.push('feed/new')} title='Add Post' />
    }} />
    <Tabs.Screen name='messenger' options={{
      tabBarIcon: ({color}) => (
        <Feather name="message-circle" size={24} color={color} />
      ),
      tabBarLabel: 'Messenger',
      headerTitle: 'Messenger'
    }} />
    <Tabs.Screen name='menu' options={{
      tabBarIcon: ({color}) => (
        <Feather name="menu" size={24} color={color} />
      ),
      tabBarLabel: 'Menü',
      headerTitle: 'Menü'
    }} />
   </Tabs>
  )
}