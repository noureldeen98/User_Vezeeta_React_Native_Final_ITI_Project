import { db , auth } from "../../firebaseConfiguration"
import { Text, VStack, Pressable,Box, ScrollView , Image, HStack , Heading } from "native-base"
import { collection, query, where } from 'firebase/firestore';
import React,{ useEffect , useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';

import styles from '../../StyleSheet.js/styleSheet'
import { useNavigation } from '@react-navigation/native';


const Departments=  ()=>{
    
    const [deptData , setDeptData] = useState(['']);
    console.log(deptData);

useEffect(()=>
    db.collection("/Departments2").get().then(
        data=>{
            let allData = []
            data.forEach(depts =>{
                allData.push(depts.data());
                
            })
            console.log(allData);
            setDeptData(allData)
        })
        ,[])


// const goToDoctorsDepartment=(deptName)=>{
//     const deptName=deptName;
//    const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
//     where('dpt','==',deptName)

//     )
// }


const goToDoctorsDepartment=(deptNames)=>{
    const deptName=deptNames;
    // console.log(deptName);
    navigation.navigate("DoctorsOfDepartmentScreen",{depart:deptName})
}
        
        
const navigation = useNavigation()
    return(
 <>
        <SafeAreaView style={styles.container} >
{/* <Text>{deptData[0].name}</Text> */}


 {deptData.map(dep=>{
     return(
         <ScrollView>
        <VStack>
             <Pressable onPress={() =>goToDoctorsDepartment(`${dep.nameAR}`)}>
        <Box style={styles.departmanetsBoxes} flex={1} width={400} borderWidth="1" borderColor="coolGray.300" shadow="3" p="5" rounded="8" alignItems="flex-end">
            <HStack>
            <Heading marginRight={4} size="md"  style={{color:"blue"}}>{dep.nameAR}</Heading>
            <Image source={{uri:`${dep.sliderPic}`}} style={{width:40 , height:60}}></Image>
            
            </HStack>
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