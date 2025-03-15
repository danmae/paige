import { View, Text } from 'react-native'
import React from 'react'
import TabsLayout from '../_layout'

export default function Absence() {
  return (
    <TabsLayout>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18}}>Kind-Abmelden-Seite</Text>
      <Text>Wirklich!</Text>
    </View>
    </TabsLayout>
  )
}