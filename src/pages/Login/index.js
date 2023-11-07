
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Login({ navigation }){
    return(
      <KeyboardAvoidingView style={styles.background}>
        
      <View style={styles.logo}>
        <Image style={styles.Image}
        source={require('./img/logo.jpeg')}
        />
      </View>
  
      <View style={styles.login}>
        <View>
        </View> 
        <TextInput 
        style={styles.input2}
        placeholder='email'
        autoCorrect={false}
        onChangeText={()=> {}}/>
  
        <TextInput 
        style={styles.input}
        placeholder='senha'
        autoCorrect={false}
        secureTextEntry
        onChangeText={()=> {}}/>

        <TouchableOpacity style={styles.textsenha}>
          <Text>Esqueceu a senha</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.bnt}
                onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.btnTexto}>Acessar</Text>
  
        </TouchableOpacity>
  
        
        
      </View>
    </KeyboardAvoidingView>
    );
  }

  export default Login;

  const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 932,
      },
    
      logo:{
        flex: 1,
        justifyContent: 'center',
        
      },
    
      login:{
        flex: 1,
        alignItems: 'center',
        width: '90%'
      },

      Image:{
        width: 300,
        height:200
      },

      input:{
        width: '95%',
        height: 46,
        marginBottom: 5,
        color: '#222',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 47,
        padding: 10,
      },

      input2:{
        width: '95%',
        height: 46,
        marginTop: 1,
        marginBottom: 54,
        color: '#222',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 47,
        padding: 10,
      },
    
      bnt:{
        backgroundColor: '#99CC6A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
        width: '75%',
        height: 58,
      },

      btnTexto:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
      },
    
      textsenha:{
        fontSize: 18,
        marginBottom: 20,

      },
  });