import {

    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,

} from 'react-native';

import React from 'react';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen');

const user = {
    username: "user",
    pass: "123456"
}

export default loginForm({navigation}){

    const [user, setUsername] = React.useState('user');
    const [pass, setPass] = React.useState('123456');

    const validaUsuario = () => {

        if(pass === user.pass && username === user.username){
            navigation.navigate('telaIMC', {name:'telaIMC'});
        }

        return(

            <View style={styles.container}>

                <Text>Login</Text>

                <view style={styles.form}>

                    <MaskInput

                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    valuer={username}
                    placeholder="Digite seu Usuário"

                    />

                    <MaskInput

                    mask={() => [/\d/, /\d/,  /\d/,  /\d/,  /\d/, /\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setPass(masked)}
                    valuer={pass}
                    placeholder="Digite sua Senha"
                    keyboardType="numeric"

                    />

                    <TouchableOpacity onPress = {validaUsuario}>

                        <Text>Login</Text>

                    </TouchableOpacity>

                </view>

            </View>

        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        gap: 15,
    },
    form: {
        width: width,
        padding:20,
        gap:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    }

})