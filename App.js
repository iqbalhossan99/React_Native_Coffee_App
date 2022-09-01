import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/homeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   paddingVertical:50,
  //   paddingHorizontal:20
  // },
});