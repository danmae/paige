import { View, Text } from 'react-native'
// This import might be incorrect - CustomButton may not be exported as a named export
// or the path might be wrong
import CustomButton from '../../components/CustomButton'

const ProfileMenu = () => {
  return (
    <View>
      <CustomButton containerStyles={'mt-4 ml-4 mr-4'} title="Fokus BNE"/>
      <CustomButton containerStyles={'mt-4 ml-4 mr-4'} title="Kindergesundheit"/>
      <CustomButton containerStyles={'mt-4 ml-4 mr-4'} title="Bildungsangebote"/>
    </View>
  )
}

export default ProfileMenu