import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, collection, Timestamp, addDoc  } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';
import DatePicker from "react-datepicker";
import { TextInputMask } from 'react-native-masked-text'




function Avaliacao({  }){

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [turma, setTurma] = useState('');
  const [Nivel, setNivel] = useState('');
  const [Empresa, setEmpresa] = useState('');



  async function cadastrar(){
    
    const db = getFirestore(app);
    const Av  = {
      data: data,
      turma: turma,
      Nivel: Nivel,
      Empresa: Empresa
    }

    const cad = await addDoc(collection(db, "Usuarios", nome, "Avaliacao"), Av);
    const id = cad.id;

    navigation.navigate('Avaliacao2', {
        nome,
        id
      });


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
          <TextInput 
              style={styles.inputText}
              placeholder='turma'
              autoCorrect={false}
              value={turma}
              keyboardType="numeric"
              onChangeText={(texto) => setTurma(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Nivel'
              autoCorrect={false}
              value={Nivel}
              onChangeText={(texto) => setNivel(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Empresa'
              autoCorrect={false}
              value={Empresa}
              onChangeText={(texto) => setEmpresa(texto)}/>
      </View>
      

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTexto}>Proximo</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
  );
  }

  export default Avaliacao;

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