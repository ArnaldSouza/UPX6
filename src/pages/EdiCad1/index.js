import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, collection, updateDoc } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'

function EdiCad1({ route}){

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [Telefone, setTelefone] = useState('');

  
console.log(route.params.id);

  async function cadastrar(){

    const { id } = route.params;
    
    const db = getFirestore(app);
    const usuarios = {
      nome: nome,
      data: data,
      cpf: cpf,
      rg: rg,
      Telefone: Telefone
    }

    const cad = updateDoc(doc(db, "Usuarios", id), usuarios,)

    const volta = navigation.navigate('GerenciamentoCadastro');
    navigation.navigate('EdiCad2', {
      id
      });
      console.log(id)


  }

  return(

    <KeyboardAvoidingView style={styles.HomeScreen}>

      <View style={styles.input}>
      <TextInput 
              style={styles.inputText}
              placeholder='Nome Completo'
              autoCorrect={false}
              value={nome}
              onChangeText={(texto) => setNome(texto)}/>
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
          <TextInputMask 
              style={styles.inputText}
              type='cpf'
              placeholder='CPF'
              autoCorrect={false}
              value={cpf}
              keyboardType="numeric"
              onChangeText={(texto) => setCpf(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='RG'
              autoCorrect={false}
              value={rg}
              keyboardType="numeric"
              onChangeText={(texto) => setRg(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInputMask 
              style={styles.inputText}
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              placeholder='Telefone'
              autoCorrect={false}
              value={Telefone}
              keyboardType="numeric"
              onChangeText={(texto) => setTelefone(texto)}/>
      </View>
      

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTexto}>Proximo</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
  );
  }

  export default EdiCad1;

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