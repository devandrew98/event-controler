import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import FullWidthButton from '../../components/FullWidthButton';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <CustomInput placeholder="Email" keyboardType="email-address" />
                <CustomInput placeholder="Senha" secureTextEntry />
                <FullWidthButton text="Entrar" title="Entrar" onPress={() => { console.log('Cliquei no botao') }} />
            </View>
        </View>
    );
};



export default Login;