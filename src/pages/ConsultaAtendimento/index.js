import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';

function ConsultaMedida({ navigation }){
    return(
    <KeyboardAvoidingView style={styles.HomeScreen}>
        <View style={styles.container}>
            <View style={styles.foto}>

            </View>
            <View style={styles}>
            <Text style={styles.nome}>Nome</Text>
            </View>
        </View>

        <View style={styles.container2}>
            <View style={styles.medida}>

            </View> 
        </View>
  

    </KeyboardAvoidingView>
    );
  }

  export default ConsultaMedida;

  const styles = StyleSheet.create({
    HomeScreen:{
        flex: 1,
        
        backgroundColor: '#FFF',
      },
      
      container:{
        flex:1,
        flexDirection: 'row',
      },

      container2:{
        flex:5,
        alignItems: 'center',
        paddingTop: 50
      },

      foto:{
        height:110,
        width: 110,
        borderStyle: 'solid',
        borderWidth: 1,
        marginStart: 25
      },

      medida:{
        height:430,
        width: 330,
        borderStyle: 'solid',
        borderWidth: 1,
      },
      
      areaNome:{
        
      },
      nome:{
        fontSize: 26,
        fontWeight: 'bold',
        marginStart: 30,
        marginTop: 20
      },
  });