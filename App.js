import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getFirestore, collection, getDocs, doc} from 'firebase/firestore'
import firebase from './src/config.js'

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import SetorSocial from './src/pages/SetorSocial';
import GerenciamentoCadastro from './src/pages/Gerenciamento de cadastro';
import Cadastro from './src/pages/Cadastro';
import Cad2  from './src/pages/Cad2';
import Cad3  from './src/pages/Cad3';
import Pesquisa from './src/pages/Pesquisa';
import MedidaDiciplinar from './src/pages/MedidaDiciplinar';
import NovaMedida from './src/pages/NovaMedida';
import ConsultaMedida from './src/pages/Consultar medida';
import Atendimento from './src/pages/Atendimento';
import NovoAtendimento from './src/pages/NovoAtendimento';
import ConsultaAtendimento from './src/pages/ConsultaAtendimento';
import EdiCad1 from './src/pages/EdiCad1/index.js';
import EdiCad2 from './src/pages/EdiCad2/index.js';
import EdiCad3 from './src/pages/EdiCad3/index.js';
import Desenvolvimento from './src/pages/Desenvolvimento/index.js';
import Presenca from './src/pages/presenca/index.js';
import Avaliacao from './src/pages/Avaliacao/index.js';
import Avaliacao2 from './src/pages/Avaliacao2/index.js';

const Stack = createStackNavigator();

  export default function App() {   
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home"  component={Home}/>
        <Stack.Screen name="Setor"  component={SetorSocial}/>
        <Stack.Screen name="GerenciamentoCadastro" component={GerenciamentoCadastro}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Cad2" component={Cad2}/>
        <Stack.Screen name="Cad3" component={Cad3}/>
        <Stack.Screen name="Pesquisa" component={Pesquisa}/>
        <Stack.Screen name="MedidaDiciplinar" component={MedidaDiciplinar}/>
        <Stack.Screen name="NovaMedida" component={NovaMedida}/>
        <Stack.Screen name="ConsultaMedida" component={ConsultaMedida}/>
        <Stack.Screen name="Atendimento" component={Atendimento}/>
        <Stack.Screen name="NovoAtendimento" component={NovoAtendimento}/>
        <Stack.Screen name="ConsultaAtendimento" component={ConsultaAtendimento}/>
        <Stack.Screen name="EdiCad1" component={EdiCad1}/>
        <Stack.Screen name="EdiCad2" component={EdiCad2}/>
        <Stack.Screen name="EdiCad3" component={EdiCad3}/>
        <Stack.Screen name="Desenvolvimento" component={Desenvolvimento}/>
        <Stack.Screen name="Presenca" component={Presenca}/>
        <Stack.Screen name="Avaliacao" component={Avaliacao}/>
        <Stack.Screen name="Avaliacao2" component={Avaliacao2}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
