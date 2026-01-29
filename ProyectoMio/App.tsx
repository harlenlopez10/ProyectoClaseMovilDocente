import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {

const handleOnLogin = () => {
  console.log("Prueba desde appp");
  alert("alerta login desde apppp");
}

const handleOnLogout = () => {
  alert("alerta logout desde apppp");
}

  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <StatusBar style="auto" />
      <CustomButton title={'Login'} onClick={handleOnLogin}/>
      <CustomButton title={'Salir'} onClick={handleOnLogout}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
