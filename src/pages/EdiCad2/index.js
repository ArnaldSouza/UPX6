import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, collection, updateDoc  } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';


function EdiCad2({ route }){

  const navigation = useNavigation();

  const [modelo, setModelo] = useState('');
  const [HorasPraticas, setHorasPraticas] = useState('');
  const [HorasTeoricas, setHorasTeoricas] = useState('');
  const [periodo, setperiodo] = useState('');
  const [termino, setTermino] = useState('');

  const { nomePesquisa } = route.params;


  async function cadastrar(){
    
    const db = getFirestore(app);
    const usuarios = {
      modelo: modelo,
      HorasPraticas: HorasPraticas,
      HorasTeoricas: HorasTeoricas,
      periodo: periodo,
      termino: termino
    }

    const cad = updateDoc(doc(db, "Usuarios", nomePesquisa), usuarios)


    navigation.navigate('EdiCad3', {
        nomePesquisa
    });
    console.log(nomePesquisa)

  }

  return(
    <KeyboardAvoidingView style={styles.HomeScreen}>

      <View style={styles.input}>
      <TextInput 
        style={styles.inputText}
        placeholder='Modelo'
        autoCorrect={false}
        value={modelo}
        onChangeText={(texto) => setModelo(texto)}/>
      </View>

      <View style={styles.input}>
      <TextInput 
        style={styles.inputText}
        placeholder='Horas Praticas'
        autoCorrect={false}
        keyboardType="numeric"
        value={HorasPraticas}
        onChangeText={(texto) => setHorasPraticas(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
            style={styles.inputText}
            placeholder='Horas Teoricas'
            autoCorrect={false}
            keyboardType="numeric"
            value={HorasTeoricas}
            onChangeText={(texto) => setHorasTeoricas(texto)}/>
      </View>

      <View style={styles.input}>
        <TextInput 
            style={styles.inputText}
            placeholder='Período do Contrato'
            autoCorrect={false}
            value={periodo}
            onChangeText={(texto) => setperiodo(texto)}/>
      </View>

      <View style={styles.input}>
        <TextInput 
            style={styles.inputText}
            placeholder='Termino de contrato'
            autoCorrect={false}
            value={termino}
            onChangeText={(texto) => setTermino(texto)}/>
      </View>
      

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTexto}>Proximo</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
    );
  }

  export default EdiCad2;

  const styles = StyleSheet.create({
    HomeScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFF',
      },

      input:{
        width: '75%',
        height: '6.2%',
        borderColor: '#000',
        justifyContent: 'space-evenly',
        borderStyle: 'solid',
        borderWidth: 1,
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