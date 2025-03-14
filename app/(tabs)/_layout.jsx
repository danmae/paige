import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { router, Tabs } from 'expo-router';
import icons from '../../constants/icons';
import { Ionicons } from '@expo/vector-icons';
import images from '../../constants/images';

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View className="items-center justify-center gap-2 mt-2">
      <Image
        source={icon}
        resizeMode='contain'
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-semibold' : 'font-normal'} text-xs`} style={{color : color}}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: "lightblue",
        tabBarInactiveTintColor: "#FFFFFF", // Changed from "FFF" to "#FFFFFF" for white
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#6e757c",
          borderTopWidth: 1,
          borderTopColor: "#c9c0ad",
          height: 84,
        },
        // Add common header styling
        headerStyle: {
          backgroundColor: "#6e757c",
        },
        headerTintColor: "#FFFFFF",
        // Add the left icon to all tab screens
        headerLeft: () => (
          <TouchableOpacity
            className={"ml-4"}
            onPress={() => router.push("/")}
          >
            <Image
              source={images.logo} // Use the paigeLogo image
              className={"w-10 h-10"}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            className={"mr-4"}
            onPress={() => console.log('Right header icon pressed')}
          >
            <Ionicons name="menu" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        )
      }}
      >
        <Tabs.Screen 
          name='calendar'
          options={{ 
            title: 'Kalender', 
            headerShown: true,
            headerTitle: 'Kalender',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.calendar}
                name="Kalender"
                color={color}
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='messenger'
          options={{ 
            title: 'Messenger', 
            headerShown: true,
            headerTitle: 'Messenger',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.messenger}
                name="Messenger"
                color={color}
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='menu'
          options={{ 
            title: 'menu', 
            headerShown: true,
            headerTitle: 'Entdecken',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.admin}
                name="Entdecken"
                color={color}
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;