import {
  Platform
} from 'react-native'

export const noShadowStyle = Platform.select({
  ios: {
    borderBottomWidth: 0,
    borderBottomColor: '#000'
  },
  android: {
    elevation: 0
  }
})