import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import app from '../../config';
import { doc, setDoc, getFirestore, getDoc , updateDoc, collection, get, getDocs, query, where  } from "firebase/firestore"; 

function Pesquisa({ navigation }){

  const db = getFirestore(app);
  const [nomePesquisa, setnomePesquisa] = useState('');
  const [data, setData] = useState([]);

  const goToEdit = (id) => {
    //console.log(id);
    navigation.navigate('EdiCad1', {id});
  }

  const renderItem = ({ item }) => (


    <View>
      <TouchableOpacity onPress={() => goToEdit(item.id)}>
      <View style={styles.Medida}>
      
        
      

      <Text style={{ color: '#FFF',paddingRight: 5,  }}>Motivo: {item.id}</Text>
      <Text style={{color: '#FFF', paddingRight: 10, paddingTop: 10}}>cpf: {item.cpf}</Text>
      
    </View>
    </TouchableOpacity>
    </View>
    
 );

  async function exibir(){
    setData([]);
    const Aux = [];
    const q = query(collection(db, "Usuarios"))
    const querySnapshot  = await getDocs(q);
    
    querySnapshot.forEach((doc) =>{

      
        Aux.push({
          id: doc.id,
          cpf: doc.data().cpf,
        })
    });
    setData(Aux); 
  }

  async function Pesquisar(){
    

    
     navigation.navigate('EdiCad1', {
nomePesquisa
    });

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
        
        <TouchableOpacity style={styles.btn} onPress={exibir}>
        <Text style={styles.btnTexto}>exibir</Text>
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

  export default Pesquisa;

  const styles = StyleSheet.create({
    Medida:{
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#314FBA',
      alignItems: 'flex-start ',
      marginBottom: 10,
      marginTop: 10,
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
      width: '39%',
      height: '7%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#99CC6A',
      alignSelf: 'flex-end',
      marginTop: 10,
      marginEnd: '6%',
    },

    btnTexto:{
      color: '#FFF',
      fontSize: 26,
      fontWeight: 'bold',
    },
      
    
  });