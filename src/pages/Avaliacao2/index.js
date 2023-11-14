import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, collection, Timestamp , updateDoc } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';




function Avaliacao2({ route }){

  const navigation = useNavigation();

  const [HabilidadeTecnica, setHabilidadeTecnica] = useState('');
  const [Metas, setMetas] = useState('');
  const [Participacao, setParticipacao] = useState('');
  const [RelacionamentoInterpessoal, setRelacionamentoInterpessoal] = useState('');

  const { nome, id } = route.params;



  async function cadastrar(  ){

    
    
    const db = getFirestore(app);
    const Av  = {
        HabilidadeTecnica: HabilidadeTecnica,
        Metas: Metas,
        Participacao: Participacao,
        RelacionamentoInterpessoal: RelacionamentoInterpessoal
    }

    const cad = updateDoc(doc(db, "Usuarios", nome, "Avaliacao", id), Av);

    console.log(Av)

    
    alert('Avaliacao feita.');

    navigation.navigate('Desenvolvimento');

  }

  return(

    <KeyboardAvoidingView style={styles.HomeScreen}>

      <View style={styles.input}>
      <TextInput 
              style={styles.inputText}
              placeholder='Habilidade Tecnica'
              autoCorrect={false}
              value={HabilidadeTecnica}
              keyboardType="numeric"
              onChangeText={(texto) => setHabilidadeTecnica(texto)}/>
      </View>

      <View style={styles.input}>
      <TextInput 
        style={styles.inputText}
        placeholder='Relacionamento interpessoal'
        autoCorrect={false}
        keyboardType="numeric"
        value={RelacionamentoInterpessoal}
        onChangeText={(texto) => setRelacionamentoInterpessoal(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Participação'
              autoCorrect={false}
              value={Participacao}
              keyboardType="numeric"
              onChangeText={(texto) => setParticipacao(texto)}/>
      </View>

      <View style={styles.input}>
          <TextInput 
              style={styles.inputText}
              placeholder='Cumprir as metas'
              autoCorrect={false}
              keyboardType="numeric"
              value={Metas}
              onChangeText={(texto) => setMetas(texto)}/>
      </View>

      

      <TouchableOpacity style={styles.btn} onPress={cadastrar}>
        <Text style={styles.btnTexto}>Finalizar</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
  );
  }

  export default Avaliacao2;

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