import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, getDocs , updateDoc, collection, get  } from "firebase/firestore"; 

function Pesquisa({ navigation }){

  const db = getFirestore(app);
  const [nomePesquisa, setnomePesquisa] = useState('');

  async function Pesquisar(){

    const querySnapshot = await getDocs(collection(db, "Usuarios", nomePesquisa, "Medidas"));
    querySnapshot.forEach((doc)  => {
        console.log(doc.id, "=>", doc.data());
    });


    console.log(nomePesquisa)
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
               
            />
        </View>
    </KeyboardAvoidingView>
    );
  }

  export default Pesquisa;

  class MedidaItem extends Comment{
    render(){
      return(
        <View>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
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
      width: '39%',
      height: '7%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#99CC6A',
      alignSelf: 'flex-end',
      marginEnd: '6%',
    },

    btnTexto:{
      color: '#FFF',
      fontSize: 26,
      fontWeight: 'bold',
    },
      
    
  });