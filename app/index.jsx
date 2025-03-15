import { Text, View, ScrollView, Image } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import images from '../constants/images'; // import paige images
import CustomButton from "../components/CustomButton"; // import custombutton component
import FormField from "../components/FormField"; // import custom formfield component

export default function App(){
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerStyle={{height:'100%'}}>
                <View className="w-full min-h-[85vh] px-4 justify-center items-center">
                    <Image
                        source={images.logo}
                        className="w-[200px] h-[200px]"
                        resizeMode="contain"
                    /> 
                    <FormField  
                        value={form.email}
                        placeholder={"E-Mail"}
                        handleChangeText={(e) => setForm({...form, email: e})}
                        otherStyles="mt-1"
                        keyboardType="email-address"
                    />
                    <FormField 
                        value={form.password}
                        placeholder={"Passwort"}
                        handleChangeText={(e) => setForm({...form, password: e})}
                        otherStyles="mt-0"
                    />
                    <CustomButton
                        title="Login"
                        handlePress={() => router.push("(drawer)/(tabs)/calendar")}
                        containerStyles="w-full mt-6"
                    /> 
                    <Text className="mt-3">
                        Noch kein Konto? 
                        <Link href="/sign-up">
                            <Text className="text-accent"> Registrieren</Text>
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}