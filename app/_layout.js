import {Drawer} from "expo-router/drawer";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {Linking} from "react-native";
import {Link} from "expo-router";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Website" onPress={() => Linking.openURL('')} />
            <Link href={'/user/absence'} onPress={() => props.navigation.closeDrawer()}>Absence</Link>
            <Link href={'/user/profile'} onPress={() => props.navigation.closeDrawer()}>Profile</Link>
            <Link href={'/user/settings'} onPress={() => props.navigation.closeDrawer()}>Settings</Link>
        </DrawerContentScrollView>
    );
}

export default function Layout() {
  return (
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="index" options={{ headerShown: false, drawerLabel: () => null, title: "Testi" }} />
      </Drawer>
  );
};
