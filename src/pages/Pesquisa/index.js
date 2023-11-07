import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';

function Pesquisa({ navigation }){
    return(
    <KeyboardAvoidingView style={styles.HomeScreen}>
        <View style={styles.input}>
        <TextInput 
            style={styles.inputText}
            placeholder='Pesquisar'
            autoCorrect={false}
            onChangeText={()=> {}}/>
        
        <ScrollView>

        </ScrollView>
        </View>

        <View>

        </View>
    </KeyboardAvoidingView>
    );
  }

  export default Pesquisa;

  const styles = StyleSheet.create({
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
      
    
  });