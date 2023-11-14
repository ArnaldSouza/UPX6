import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, getDocs , updateDoc, collection, getDoc  } from "firebase/firestore"; 

function ConsultarMedida({ navigation }){

  const db = getFirestore(app);
  const [nomePesquisa, setnomePesquisa] = useState('');
  const [data, setData] = useState([]);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.Medida}>
      

      <Text style={{ color: '#FFF',paddingRight: 5,  }}>Motivo: {item.motivo}</Text>
      <Text style={{color: '#FFF', paddingRight: 10, paddingTop: 10}}>Medida: {item.medida}</Text>
      <Text style={{color: '#FFF', paddingRight: 10, paddingTop: 10}}>data: {item.data}</Text>
      <Text style={{color: '#FFF', paddingRight: 10, paddingTop: 10}}>Motivo: {item.motivo}</Text>
      <Text style={{color: '#FFF', paddingRight: 10, paddingTop: 10}}>Descricao: {item.descricao}</Text>
      
    </View>
    </View>
  );

  async function Pesquisar(){

    //const querySnapshot = await getDocs(collection(db, "Usuarios", nomePesquisa, "Medidas"));
    setData([]);
    const Aux = [];
    const querySnapshot  = await getDocs(collection(db, "Usuarios", nomePesquisa, "Medidas"));
    
    querySnapshot.forEach((doc) =>{
      Aux.push({
        id: doc.data().id,
        date: doc.data().data,
        descricao: doc.data().descricao,
        medida: doc.data().medida,
        motivo: doc.data().motivo
      })});
    
    setData(Aux);  

    console.log(Aux)

  }
    return(
    <KeyboardAvoidingView style={styles.HomeScreen}>
        <View style={styles.input}>
        <TextInput 
            style={styles.inputText}
            placeholder='Pesquisar'
            autoCorrect={false}
            value={nomePesquisa}
            onChangeText={(texto) => setnomePesquisa(texto)}/>

        
        </View>
        <TouchableOpacity style={styles.btn} onPress={Pesquisar}>
        <Text style={styles.btnTexto}>Pesquisar</Text>
        </TouchableOpacity>
        <View>
            <FlatList
               data={data}
               renderItem={renderItem}
            />
        </View>
    </KeyboardAvoidingView>
    );
  }

  export default ConsultarMedida;

  

  const styles = StyleSheet.create({

    Medida:{
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#314FBA',
      alignItems: 'flex-start ',
      marginBottom: 10,
      justifyContent: 'flex-start',
      padding: 10,
      borderRadius: 4,
    },

    HomeScreen:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingTop: 20
    },

  input:{
      width: '75%',
      height: '6.2%',
      borderColor: '#000',
      justifyContent: 'space-evenly',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 26,
  },

  inputText:{
      marginStart: '5%',
  },

  btn:{
    width: 150,
    height: '7%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#99CC6A',
    alignSelf: 'flex-end',
    marginEnd: '6%',
    borderRadius: 15,
    marginTop: "8%",
    marginBottom: "4%"
  },

  btnTexto:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
    
  
});