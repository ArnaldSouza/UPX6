import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, collection, updateDoc  } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';


function Cad3({ route }){

  const [Empresa, setEmpresa] = useState('');
  const [Função, setFunção] = useState('');
  const [Polo, setPolo] = useState('');
  const [Instrutor, setInstrutor] = useState('');
  const [Adimissao, setAdimissao] = useState('');

  const { nome } = route.params;
  const navigation = useNavigation();


  async function cadastrar(){
    
    const db = getFirestore(app);
    const usuarios = {
      Empresa: Empresa,
      Função: Função,
      Polo: Polo,
      Instrutor: Instrutor,
      Adimissao: Adimissao
    }

    const cad = updateDoc(doc(db, "Usuarios", nome), usuarios)
    const volta = navigation.navigate('GerenciamentoCadastro');



  }

  return(
    <KeyboardAvoidingView style={styles.HomeScreen}>

      <View style={styles.input}>
      <TextInput 
              style={styles.inputText}
              placeholder='Empresa'
              value={Empresa}
              autoCorrect={false}
              onChangeText={(texto) => setEmpresa(texto)}/>
              </View>

      <View style={styles.input}>
      <TextInput 
              style={styles.inputText}
              placeholder='Função'
              value={Função}
              autoCorrect={false}
              onChangeText={(texto) => setFunção(texto)}/>
              </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Polo'
              value={Polo}
              autoCorrect={false}
              onChangeText={(texto) => setPolo(texto)}/>
              </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Instrutor'
              value={Instrutor}
              autoCorrect={false}
              onChangeText={(texto) => setInstrutor(texto)}/>
              </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Adimissao'
              value={Adimissao}
              autoCorrect={false}
              onChangeText={(texto) => setAdimissao(texto)}/>
      </View>
      

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTexto}>Proximo</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
    );
  }

  export default Cad3;

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