import { View, Text, Image } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
  
    <View style={styles.container}>
    <Image
    style={{width:'80%', height:80, marginBottom:30}}
    resizeMode="contain"
    source={require('../../assets/facebook.png')}
      />

      <InputTexto label="Digite seu numero ou email" dica="Digite seu numero ou email"/>
      <InputTexto label="Digite sua senha" dica="Digite sua senha" seguranca={true}/>
      
 

      <Botao btn="entrar" cor='#1477F2' src='home' cortexto='#fff' tm='35%'/>
      <View style={styles.cont}>
        <View style={styles.line}/>
        <Text style={styles.text}>ou</Text>
        <View style={styles.line}/>
        </View>
      <Botao btn="criar uma nova conta"  src='criar uma nova conta' cortexto='#000' tm='10%'/>
    </View>
  );
}