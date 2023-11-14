import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Desenvolvimento() {
  const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={styles.HomeScreen}>
          
          <TouchableOpacity style={styles.bnt}
                onPress={() => navigation.navigate('Presenca')}>
          <Text style={styles.btnTexto}>Presença</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.bnt}
                onPress={() => navigation.navigate('Avaliacao')}>
          <Text style={styles.btnTexto}>Avaliacao</Text>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
     
    );
}

export default Desenvolvimento;

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