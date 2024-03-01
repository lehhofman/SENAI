import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen');

const users = [

  { username: 'user1', pass: '123456' },
  { username: 'user2', pass: '654321' }

];

export default function LoginForm({ navigation }) {

  const [username, setUsername] = React.useState('user1');
  const [pass, setPass] = React.useState('123456');


  const validaUsuario = () => {

    const foundUser = users.find(user => user.username === username && user.pass === pass);

    if (foundUser) {

      navigation.navigate("OpcaoCalc"); 

    }

  };

  return (

    <View style={styles.container}>

      <Text>Formulário de login</Text>

      <View style={styles.form}>

        {/* USERNAME */}

        <MaskInput

          style={styles.textInput}
          onChangeText={(masked, unmasked) => setUsername(masked)}
          value={username}
          placeholder="Digite seu username"

        />

        {/* SENHA */}

        <MaskInput

          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setPass(masked)}
          value={pass}
          placeholder="Digite sua senha"
          keyboardType="numeric"

        />

        <TouchableOpacity onPress={validaUsuario}>

          <Text>Login</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  form: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  textInput: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: '#006eff',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  
});