import { db , auth } from "../../firebaseConfiguration"
import { Text, VStack, Pressable,Box, ScrollView } from "native-base"
import { collection } from 'firebase/firestore';
import React,{ useEffect , useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';

import styles from '../../StyleSheet.js/styleSheet'
import { useNavigation } from '@react-navigation/native';


const Departments=  ()=>{
    
    const [deptData , setDeptData] = useState(['']);
    console.log(deptData);

useEffect(()=>
    db.collection("Departments").get().then(
        data=>{
            let allData = []
            data.forEach(depts =>{
                allData.push(depts.data());
                
            })
            console.log(allData);
            setDeptData(allData)
        })
        ,[])
        
        
const navigation = useNavigation()
    return(
 <>
        <SafeAreaView style={styles.container} >
{/* <Text>{deptData[0].name}</Text> */}


 {deptData.map(dep=>{
     return(
         <ScrollView>
        <VStack>
             <Pressable onPress={() =>navigation.navigate("HomeVisit")}>
        <Box flex={1} width={400} borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
            <Text>{dep.name}</Text>
            </Box>
            </Pressable>
        </VStack>
        </ScrollView>
     )
 })}
      </SafeAreaView>
      </>
    )

}

export default Departments