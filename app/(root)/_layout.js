import {Tabs} from "expo-router";

export default function Layout() {
    return (
    <Tabs>
        <Tabs.Screen name="calendar" options={{title: 'Kalender', headerShown: false, title: "Kalender"}} />
        <Tabs.Screen name="messenger" options={{title: 'Messenger'}} />
        <Tabs.Screen name="menu" options={{title: 'Menü'}} />
        <Tabs.Screen name="user/profile" options={{ href: null }} />
        <Tabs.Screen name="user/settings" options={{ href: null }} />
        <Tabs.Screen name="user/absence" options={{ href: null }} />
    </Tabs>
  );
}
