import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SetorSocial() {
  const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={styles.HomeScreen}>
          
          <TouchableOpacity style={styles.bnt}
                onPress={() => navigation.navigate('MedidaDiciplinar')}>
          <Text style={styles.btnTexto}>Medida Diciplinar</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.bnt}
                onPress={() => navigation.navigate('Atendimento')}>
          <Text style={styles.btnTexto}>Atendimento</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
     
    );
}

export default SetorSocial;

const styles = StyleSheet.create({
    HomeScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFF',
      },

      bnt:{
        width: '75%',
        height: '10%',
        borderRadius: 43,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#99CC6A',
      },

      btnTexto:{
        color: '#FFF',
        fontSize: 23,
        fontWeight: 'bold',
      },
    
      
  });