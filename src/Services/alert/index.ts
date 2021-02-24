import { Alert } from 'react-native'

export const showAlert = (
  titleText = 'Something happened.',
  alertType?: 'success' | 'error' | 'warning' | 'info' | 'question'
): void => {
  Alert.alert(`${alertType}: ${titleText}`)
}
