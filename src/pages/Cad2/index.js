import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';

function Cad2({ navigation }){
    return(
      <KeyboardAvoidingView style={styles.HomeScreen}>
  
        <View style={styles.input}>
        <TextInput 
                style={styles.inputText}
                placeholder='Modelo'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>

        <View style={styles.input}>
        <TextInput 
                style={styles.inputText}
                placeholder='Horas Praticas'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>
  
        <View style={styles.input}>
            <TextInput 
                style={styles.inputText}
                placeholder='Horas Teoricas'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>

        <View style={styles.input}>
            <TextInput 
                style={styles.inputText}
                placeholder='Período do Contrato'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>

        <View style={styles.input}>
            <TextInput 
                style={styles.inputText}
                placeholder='Termino de contrato'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>
        

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cad3')}>
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