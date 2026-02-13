import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [contador, setContador] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  
  const esPar = contador % 2 === 0;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Guia de ejercicios React Native</Text>
        
        {/* ejercicio 1 */}
        <Text style={styles.SubTitle}>---------------------------------</Text>
        <Text style={styles.SubTitle}>Ejercico 1</Text>
        <View style={styles.section}>
          <TextInput 
            style={styles.input}
            placeholder="Nombre" 
            onChangeText={setNombre} 
            value={nombre} 
          />
          <TextInput 
            style={styles.input}
            placeholder="Edad" 
            keyboardType="numeric"
            onChangeText={(v) => setEdad(v.replace(/[^0-9]/g, ''))} 
            value={edad} 
          />
          {nombre !== "" && edad !== "" && (
            <Text style={styles.infoText}>Hola, {nombre}. Tienes {edad} años.</Text>
          )}
        </View>
        
        {/* ejercicio 2 */}
        <Text style={styles.SubTitle}>---------------------------------</Text> 
        <Text style={styles.SubTitle}>Ejercicio 2</Text>
        <View style={styles.section}>
          <Text style={styles.counterLabel}>Contador: {contador}</Text>
          <View style={styles.row}>
            
            <TouchableOpacity 
              style={[styles.botonBase, { backgroundColor: '#4CAF50' }]} 
              onPress={() => setContador(contador + 1)}
            >
              <Text style={styles.botonText}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.botonBase, { backgroundColor: '#F44336' }]} 
              onPress={() => setContador(contador - 1)}
            >
              <Text style={styles.botonText}>-1</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ color: esPar ? 'blue' : 'purple', fontWeight: 'bold', marginTop: 5 }}>
            {esPar ? "Número par" : "Número impar"}
          </Text>
          {contador < 0 && <Text style={styles.warning}>No se recomienda valores negativos</Text>}
        </View>
        
        {/* ejercicio 3 */}
        <Text style={styles.SubTitle}>---------------------------------</Text> 
        <Text style={styles.SubTitle}>Ejercico 3</Text>
        <View style={styles.section}>
          <TouchableOpacity 
            style={[styles.botonBase, { backgroundColor: '#2196F3', width: '100%' }]} 
            onPress={() => setMostrar(!mostrar)}
          >
            <Text style={styles.botonText}>{mostrar ? "Ocultar detalles" : "Mostrar detalles"}</Text>
          </TouchableOpacity>

          {mostrar ? (
            <View style={styles.detallesBox}>
              <Text>Espero le guste Ing!</Text>
              <Image source={{ uri: 'https://srv.latostadora.com/designall.dll/el-mejor-ingeniero-del-mundo--i:1356231620840201356231;c:16208402;s:G_A1;w:700;h:520;k:3a15a09ee24c6101988b671eaa73e446;ha:2600e12e75a519762dc00d85ff48d996.jpg' }} style={styles.img} />
            </View>
          ) : (
            <Text style={styles.infoText}>Detalles ocultos</Text>
          )}
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
    backgroundColor: '#fff',
  },
  card: {
    width: "90%",
    height: "95%",
    backgroundColor: '#828489',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  SubTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  section: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    height: "13%",
  },
  input: {
    width: '100%',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 30,
  },
  botonBase: {
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 20,
    color: '#b00f0f',
    marginTop: 5,
  },
  warning: {
    color: 'orange',
    fontSize: 18,
    marginTop: 2,
    
  },
  detallesBox: {
    marginTop: 0,
    alignItems: 'center',
  },
  img: {
    width: 180,
    height: 180,
    marginTop: 5,
  },
  counterLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});


// de aca pa abajo es del proyecto de clase, y pa arriba es la tarea que la ing dejo

/*import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  
  return (
    <View>
        
    </View>
  );
}*/