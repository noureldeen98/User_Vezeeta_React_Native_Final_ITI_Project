import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { app, auth } from '../../firebaseConfiguration';
import { Link, useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import styles from '../../StyleSheet.js/styleSheet';
import AsyncStorage from '@react-native-community/async-storage'



const uri = 'https://t4.ftcdn.net/jpg/02/32/90/73/360_F_232907392_acgOf8TUD5wRuTb5KvnTfpfFc4RhrwgI.jpg'
const profilePicture = 'https://play-lh.googleusercontent.com/ttLkUcwcja5-8YAhk1ndWbPEglgdoCjs2tEDEOXsd09uq6WuIL-GjWRn_a7HVJbpN06Q'

const LoginComponent = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [user, setUser] = React.useState({});
    const navigation = useNavigation();

    const auth = getAuth(app);


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    const handleSignIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            AsyncStorage.setItem("Login", true);
            AsyncStorage.setItem('UserEmail',user.user.reloadUserInfo.email);
            AsyncStorage.setItem('ID', user.user.uid)
            navigation.navigate('Home');
            // console.log(user);

        } catch (err) {
            console.log(err);
        }
    };

    // const logout = async () => {
    //     await signOut(auth);
    //     // localStorage.removeItem("UserEmail");
    //     // localStorage.setItem("Login", false);
    // };

    return (
        <View style={styles.containerAuth}>
            <Image source={{ uri }} style={[styles.imageAuth, StyleSheet.absoluteFill]} alt="profile" />
            <ScrollView contentContainerStyle={{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <BlurView intensity={100}>
                    <View style={styles.login}>

                        <Image source={{ uri: profilePicture }} style={styles.profilePicture} alt="profile" />

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
                            <TextInput onChangeText={(text) => setEmail(text)} style={styles.inputAuth} placeholder="Enter your email" />
                        </View>

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
                            <TextInput onChangeText={(text) => setPassword(text)} style={styles.inputAuth} placeholder="password" secureTextEntry={true} />
                        </View>

                        <TouchableOpacity onPress={() => { handleSignIn(email, password) }} style={[styles.buttonAuth, { backgroundColor: '#00CFEB90' }]}>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Login</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, fontWeight: '400', textDecorationLine: 'underline' }}><Link to="/Signup">Create Account</Link></Text>
                    </View>
                </BlurView>
            </ScrollView>
        </View>
    );
}


export default LoginComponent;