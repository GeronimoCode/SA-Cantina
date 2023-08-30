import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity,  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.addprdt}>Adicionar Produto</Text>
      <StatusBar style="auto" />
      <Image style={styles.logoCookie}
       source={require('./assets/CookieLápisSA.png')}
       />
       <Text style={styles.nome}>Nome</Text>
       <TextInput style={styles.caixat1}
       />
       <Text style={styles.inf}>Informações nutricionais</Text>
       <TextInput style={styles.caixat2}
       />
       <Text style={styles.preco}>Preço</Text>
       <TextInput style={styles.caixat3}
       />

       <TouchableOpacity style={styles.cancelar}>
        <Text style={styles.cancelart}>Cancelar</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.adicionar}>
        <Text style={styles.adicionart}>Adicionar</Text>
       </TouchableOpacity>
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFEC',
    alignItems: 'center',
    
  },

  addprdt: {
    fontWeight: "600",
    fontSize: 26,
    top: 90,
  },

  logoCookie: {
    resizeMode: 'center',
    top: 40,
  },

  nome: {
     right: 100,
  },

  caixat1:{
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#A07964',
    width: 250,
    borderRadius: 10,
    
  },

  inf:{
    marginTop: 20,
    right: 50,
  },

  caixat2: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#A07964',
    padding: 50,
    borderRadius: 10,
    width: 250,
        
  }, 

  preco:{
   right: 105,
   marginTop: 10, 
  },

  caixat3:{
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    width: 250,
    borderRadius: 10,
    
  },

  cancelar:{
  right: 85,
  borderRadius: 7,
   marginTop: 50,
   borderWidth: 1,
   width: 100,
   height: 35,
   borderColor: '#A07964',
   justifyContent: 'center',
   alignItems: 'center'
  },

  adicionar:{
    left: 85,
    borderRadius: 7,
     marginTop: 50,
     borderWidth: 1,
     width: 100,
     height: 35,
     borderColor: '#A07964',
     justifyContent: 'center',
     alignItems: 'center',
     bottom: 86,
     backgroundColor: '#743C34',
     color: "#ffff"
     
    },

    cancelart:{
      color:'gray',
      fontWeight: 'bold',
    },

    adicionart:{
      color: '#ffff',
      fontWeight: "bold",
    }


});
