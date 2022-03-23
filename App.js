import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeMainComponent from './src/Components/HomeMainContent'
import Departments from './src/Components/Departments'
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import DepartmentsScreen from "./src/Screens/DepartmentsScreen"
import HomeVisitScreen from "./src/Screens/HomeVisitScreen"
import SignupScreen from './src/Screens/SignupScreen';
import LoginScreen from './src/Screens/LoginScreen';
import React from 'react';



const Stack = createNativeStackNavigator();


export default function App() {

  const logn = localStorage.getItem('login');
  const [login, setLogin] = React.useState(logn);
  
  return (


    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Departments" component={DepartmentsScreen} />
          <Stack.Screen name="HomeVisit" component={HomeVisitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <HomeMainComponent/>
      
      <Departments/>
      <StatusBar style="auto" />
    </View> */}