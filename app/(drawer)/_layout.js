import React from "react";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../components/CustomDrawer";

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="favourites" options={{headerShown: true}} />
      <Drawer.Screen name="settings" options={{headerShown: true}} />
    </Drawer>
  );
}