import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import LoginScreen from '../Screens/LoginScreen';
import { auth, app, db } from '../../firebaseConfiguration';
import { Link, useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore'
import styles from './../../StyleSheet.js/styleSheet';
import AsyncStorage from '@react-native-community/async-storage'


const uri = 'https://t4.ftcdn.net/jpg/02/32/90/73/360_F_232907392_acgOf8TUD5wRuTb5KvnTfpfFc4RhrwgI.jpg'
const profilePicture = 'https://play-lh.googleusercontent.com/ttLkUcwcja5-8YAhk1ndWbPEglgdoCjs2tEDEOXsd09uq6WuIL-GjWRn_a7HVJbpN06Q'


const SignupComponent = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [Name, setUserName] = React.useState('');
    const navigation = useNavigation();
    const auth = getAuth(app);

    const handleCreateAccount = async (email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "Users"), {
                uid: user.uid,
                Name: Name,
                Emaile: user.email,
            });
            console.log(user);
            navigation.navigate('Home');
            AsyncStorage.setItem('UserEmail',user.email);
            AsyncStorage.setItem('ID', user.uid);
           
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <View style={styles.containerAuth}>
            <Image source={{ uri }} style={[styles.imageAuth, StyleSheet.absoluteFill]} alt="profile image" />
            <ScrollView contentContainerStyle={{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <BlurView intensity={100}>
                    <View style={styles.login}>

                        <Image source={{ uri: profilePicture }} style={styles.profilePicture}  alt="profile image"/>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>User Name</Text>
                            <TextInput onChangeText={(text) => setUserName(text)} style={styles.inputAuth} placeholder="Enter your name" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
                            <TextInput onChangeText={(text) => setEmail(text)} style={styles.inputAuth} placeholder="Enter your email" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
                            <TextInput onChangeText={(text) => setPassword(text)} style={styles.inputAuth} placeholder="password" secureTextEntry={true} />
                        </View>

                        <TouchableOpacity onPress={() =>{ handleCreateAccount(email, password)}} style={[styles.buttonAuth, { backgroundColor: '#00CFEB90' }]}>
                            <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Signup</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 17, fontWeight: '400' }}>Already have an accout<Link to="/Login">  login</Link></Text>



                    </View>
                </BlurView>
            </ScrollView>
        </View>
    );
}




export default SignupComponent;