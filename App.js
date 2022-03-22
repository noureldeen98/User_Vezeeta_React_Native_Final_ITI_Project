import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeMainComponent from './src/Components/HomeMainContent'
import LoginComponent from './src/Components/login'
import Departments from './src/Components/Departments'
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import DepartmentsScreen from "./src/Screens/DepartmentsScreen"
import HomeVisitScreen from "./src/Screens/HomeVisitScreen"
import DoctorsOfDepartmentScreen from './src/Screens/DoctorsOfDepartment'
import DocotrsInfoScreen from './src/Screens/DocotrsInfoScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (


<NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Departments" component={DepartmentsScreen} />
    <Stack.Screen name="HomeVisit"  component={HomeVisitScreen}/>
    <Stack.Screen name="DoctorsOfDepartmentScreen"  component={DoctorsOfDepartmentScreen}/>
    <Stack.Screen name="DocotrsInfoScreen"  component={DocotrsInfoScreen}/>
    
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