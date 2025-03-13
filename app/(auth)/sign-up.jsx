import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full min-h-[85vh] px-4 justify-center items-center">
          <Text>PAIGE ist eine App der Kenntnisreich Kindertagesstätten. Der Zugang zu PAIGE erfolgt ausschließlich auf Einladung per E-Mail über die Kitaleitung.</Text>
          <Text>Solltest du noch keinen Zugang haben, wende dich bitte an die Kitaleitung deiner Kita.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp