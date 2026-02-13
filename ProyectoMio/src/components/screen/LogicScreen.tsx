import { useState } from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";



export default function LogicScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleOnLogin = () => {
    setEmail("")
    console.log("prueba login desde app");
    //alert("Alerta login desde app");
  }

  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Open up App</Text>
        
        <View style={styles.buttonsWrapper}>

           <CustomInput 
              placeholder={'Ingrese su correo'} 
              onChange={setEmail} 
              value={email} 
              typeInput={'email'}              
              />
               <CustomInput 
              placeholder={'Password'} 
              onChange={setPassword} 
              value={password} 
              typeInput={'password'}              
              />
              <CustomInput 
              placeholder={'CAMPO 3'} 
              onChange={()=>{}} 
              value={""} 
              typeInput={'text'}              
              />
          <CustomButton 
              title={'Login'} 
              onClick={handleOnLogin}
              />
          <CustomButton 
              title={'Salir'}
              onClick={handleOnLogout}
              variant={'secondary'} />

             
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: "80%",
    height: "80%",
    borderRadius:15,
    backgroundColor: '#f3f4f6',
  },
  buttonsWrapper: {
    marginTop: 15,
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});