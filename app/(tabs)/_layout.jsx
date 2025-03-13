import React from 'react';
import { View, Image, Text } from 'react-native';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons'; // Adjust the path as necessary

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
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
        tabBarInactiveTintColor: "FFF",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#6e757c",
          borderTopWidth: 1,
          borderTopColor: "#c9c0ad",
          height: 84,
        },
      }}
      >
        <Tabs.Screen 
          name='calendar'
          options={{ 
            title: 'Kalender', 
            headerShown: false,
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
            headerShown: false,
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
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.admin}
                name="Admin"
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