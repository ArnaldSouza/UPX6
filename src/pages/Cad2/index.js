import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, collection, updateDoc  } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'



function Cad2({ route }){

  const navigation = useNavigation();

  const [modelo, setModelo] = useState('');
  const [HorasPraticas, setHorasPraticas] = useState('');
  const [HorasTeoricas, setHorasTeoricas] = useState('');
  const [periodo, setperiodo] = useState('');
  const [termino, setTermino] = useState('');

  const { nome } = route.params;

  const mod = [
    {key:'1', value:'CLT'},
    {key:'2', value:'Estagio'},
    {key:'3', value:'Jovem aprentiz'},
    {key:'4', value:'Temporario'},
  ]


  async function cadastrar(){
    
    const db = getFirestore(app);
    const usuarios = {
      modelo: modelo,
      HorasPraticas: HorasPraticas,
      HorasTeoricas: HorasTeoricas,
      periodo: periodo,
      termino: termino
    }

    const cad = updateDoc(doc(db, "Usuarios", nome), usuarios)
    console.log(nome)

    navigation.navigate('Cad3', {
      nome
    });

  }

  return(
    <KeyboardAvoidingView style={styles.HomeScreen}>

      <View  style={styles.input}>
      <TextInput 
        style={styles.inputText}
        placeholder='Modelo'
        autoCorrect={false}
        value={modelo}
        data={mod}
        onChangeText={(texto) => setModelo(texto)}/>
      </View>

      <View style={styles.input}>
      <TextInput 
        style={styles.inputText}
        placeholder='Horas Praticas'
        autoCorrect={false}
        value={HorasPraticas}
        keyboardType="numeric"
        onChangeText={(texto) => setHorasPraticas(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
            style={styles.inputText}
            placeholder='Horas Teoricas'
            autoCorrect={false}
            value={HorasTeoricas}
            keyboardType="numeric"
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

  export default Cad2;

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