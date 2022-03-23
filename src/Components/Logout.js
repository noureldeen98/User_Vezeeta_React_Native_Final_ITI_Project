import React from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { app, db } from '../../firebaseConfiguration';
import { Link, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const auth = getAuth(app);

const LogoutComponent = () => {
    const navigation = useNavigation();

    const logout = () => {
        signOut(auth);
        AsyncStorage.removeItem('login');
        AsyncStorage.removeItem('UserEmail');
        AsyncStorage.removeItem('ID')
        navigation.navigate('Login');



    };

    return (
        <>
            <TouchableOpacity onPress={logout}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'red' }}>logout</Text>
            </TouchableOpacity>
        </>
    )

}

export default LogoutComponent;