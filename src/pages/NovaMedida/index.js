import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, updateDoc, addDoc, useFirestore, collection   } from "firebase/firestore";
import { TextInputMask } from 'react-native-masked-text'



function NovaMedida({ navigation }){

  const [nome, setNome] = useState('');
  const [motivo, setMotivo] = useState('');
  const [data, setData] = useState('');
  const [medida, setMedida] = useState('');
  const [descricao, setDescricao] = useState('');

  

  async function cadastrar(){

    const db = getFirestore(app);

    const med = {
      motivo: motivo,
      data: data,
      medida: medida,
      descricao: descricao
    }

  const cad = addDoc(collection(db, "Usuarios", nome, "Medidas"), med)


  
  console.log(med)

  }
  
  return(
    <KeyboardAvoidingView style={styles.HomeScreen}>

      <View style={styles.input}>
      <TextInput 
              style={styles.inputText}
              placeholder='Nome do colaboarador'
              autoCorrect={false}
              value={nome}
              onChangeText={(texto) => setNome(texto)}/>
      </View>

      <View style={styles.input}>
      <TextInput 
              style={styles.inputText}
              placeholder='Motivo'
              autoCorrect={false}
              value={motivo}
              onChangeText={(texto) => setMotivo(texto)}/>
      </View>

      <View style={styles.input}>
      <TextInputMask
      type={'datetime'}
      options={{
        format: 'DD/MM/YYYY'
      }} 
        style={styles.inputText}
        placeholder='DD/MM/YYYY'
        autoCorrect={false}
        value={data}
        onChangeText={(texto) => setData(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Medida'
              autoCorrect={false}
              value={medida}
              onChangeText={(texto) => setMedida(texto)}/>
      </View>

      <View style={styles.inputdes}>
          <TextInput 
              style={styles.inputText}
              placeholder='Descricao'
              autoCorrect={false}
              value={descricao}
              onChangeText={(texto) => setDescricao(texto)}/>
      </View>



      

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTexto}>Enviar</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
    );
  }

  export default NovaMedida;

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

      inputdes:{
        height: '24.28%',
        width: '76.8%',
        borderStyle: 'solid',
        borderWidth: 1,
      },

      btn:{
        width: '55%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#99CC6A',
        marginEnd: '6%',
        borderRadius: 30
      },

      btnTexto:{
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
      },
      
  });