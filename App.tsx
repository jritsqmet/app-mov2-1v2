import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagen from './components/Imagen';
import Botones from './components/Botones';
import BottomTabNavigator from './Navigators/TabNavigator';

export default function App() {
  return (
   <BottomTabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#705d8e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
