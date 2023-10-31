import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';

function NovaMedida({ navigation }){
    return(
      <KeyboardAvoidingView style={styles.HomeScreen}>
  
        <View style={styles.input}>
        <TextInput 
                style={styles.inputText}
                placeholder='Motivo'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>

        <View style={styles.input}>
        <TextInput 
                style={styles.inputText}
                placeholder='Data'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>
  
        <View style={styles.input}>
            <TextInput 
                style={styles.inputText}
                placeholder='Medida'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>

        <View style={styles.inputdes}>
            <TextInput 
                style={styles.inputText}
                placeholder='Descricao'
                autoCorrect={false}
                onChangeText={()=> {}}/>
        </View>



        

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cad2')}>
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