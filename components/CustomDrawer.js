import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { View, Image, Text } from 'react-native'
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { router, usePathname } from 'expo-router'
import { StyleSheet } from 'react-native'

const CustomDrawerContent = (props) => {
    const pathname = usePathname();
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://kenntnisreich-kindertagesstaetten.de/wp-content/uploads/2022/01/claudia_lotz.png" }}
            width={80}
            height={80}
            style={styles.userImg}
          />
          <View style={styles.userDetailsWrapper}>
            <Text style={styles.userName}>Claudia Lotz</Text>
            <Text style={styles.userEmail}>claudia.lotz@berlin.de</Text>
          </View>
        </View>
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="user-x"
              size={size}
              color={pathname == "/absence" ? "#fff" : "#000"}
            />
          )}
          label={"Kind abmelden"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/absence" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathname == "/absence" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/(drawer)/(tabs)/(user)/absence");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="user"
              size={size}
              color={pathname == "/profile" ? "#fff" : "#000"}
            />
          )}
          label={"Profil"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/profile" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/(drawer)/(tabs)/(user)/profile");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="settings"
              size={size}
              color={pathname == "/settings" ? "#fff" : "#000"}
            />
          )}
          label={"Einstellungen"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/settings" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/(drawer)/(tabs)/(user)/settings");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="log-out"
              size={size}
              color={pathname == "/" ? "#fff" : "#000"}
            />
          )}
          label={"Abmelden"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathname == "/" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathname == "/" ? "#333" : "#fff" }}
          onPress={() => {
            router.push("/");
          }}
        />
      </DrawerContentScrollView>
    );
  };


  const styles = StyleSheet.create({
    navItemLabel: {
      marginLeft: -20,
      fontSize: 18,
    },
    userInfoWrapper: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      marginBottom: 10,
    },
    userImg: {
      borderRadius: 40,
    },
    userDetailsWrapper: {
      marginTop: 25,
      marginLeft: 10,
    },
    userName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    userEmail: {
      fontSize:16,
      fontStyle: 'italic',
      textDecorationLine: 'underline',
    }
  });  

export default CustomDrawerContent;