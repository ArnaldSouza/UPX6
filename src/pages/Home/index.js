import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Home() {
  const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={styles.HomeScreen}>
          
        <TouchableOpacity style={[styles.card, styles.cardElevad]} onPress={() => navigation.navigate('GerenciamentoCadastro')} >
          <Image source={{ uri: 'https://img.freepik.com/fotos-gratis/mao-usando-laptop-com-tela-virtual-e-documento-para-aprovacao-on-line-de-garantia-de-qualidade-sem-papel-e-conceito-de-gerenciamento-de-erp_616485-61.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=sph'}} 
          style={styles.cardImage}/>
          <View style={styles.cardFooter}>
            <Text style={styles.btnTexto}>Gerenciamento de cadastro</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.cardElevad]} onPress={() => navigation.navigate('Setor')}>
          <Image source={{ uri: 'https://img.freepik.com/fotos-gratis/mao-usando-laptop-com-tela-virtual-e-documento-para-aprovacao-on-line-de-garantia-de-qualidade-sem-papel-e-conceito-de-gerenciamento-de-erp_616485-61.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=sph'}} 
          style={styles.cardImage}/>
          <View style={styles.cardFooter}>
            <Text style={styles.btnTexto}>Setor Social</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.cardElevad]}>
          <Image source={{ uri: 'https://img.freepik.com/fotos-gratis/mao-usando-laptop-com-tela-virtual-e-documento-para-aprovacao-on-line-de-garantia-de-qualidade-sem-papel-e-conceito-de-gerenciamento-de-erp_616485-61.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=sph'}} 
          style={styles.cardImage}/>
          <View style={styles.cardFooter}>
            <Text style={styles.btnTexto}>Desenvolvimento</Text>
          </View>
        </TouchableOpacity>

        
      </KeyboardAvoidingView>
     
    );
}


export default Home;

const styles = StyleSheet.create({
  HomeScreen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
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
    //backgroundColor:'green',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 17,
    padding: 10,
  },

  bnt:{
    backgroundColor: '#7ED24B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '75%',
    height: 45
  },

  bntHome:{
    backgroundColor: '#314FBA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    width: '100%',
    height: '23%'
  },

  bntHome2:{
    
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 22,
    width: '80%',
    height: 236,
  },

  bntimg:{
    height:'77%',
    backgroundColor: '#7ED24B'
  },

  btnTexto:{
    color: '#FFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  textsenha:{
    marginTop: 5,
  },

  HomeScreen:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1,
  },

  card:{
    width: 351,
    height: 234,
    borderRadius: 22
  },
  
  cardImage:{
    height:160,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },

  cardBody:{},

  cardFooter:{
    backgroundColor: '#314FBA',
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

});