import { Box, HStack, VStack,Image,Text,ScrollView, Button , Avatar } from "native-base"

import { useState } from 'react';
import { useEffect } from 'react';
import { db , auth } from "../../firebaseConfiguration"
import { SafeAreaView } from 'react-native';
import styles from "../../StyleSheet.js/styleSheet";
import { doc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';




const DoctorsOfDepartment=(props)=>{
   const [deptName]=useState(props.data)

   const [doctorList , setDoctorList] = useState([])
   console.log(doctorList);

   const navigation = useNavigation()
    
useEffect(()=>
    db.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors")
    .get().then(
        data=>{
            let allData = []
            data.forEach(depts =>{
                if(depts.data().dpt==`${deptName}`){
                    allData.push(depts.data());
                    
                }
                
            })
            setDoctorList(allData)
        })
        // console.log(depts.data().Name)
    ,[])  


    const goToDoctorInfo=(information)=>{
      const doctInfo = information
      console.log(doctInfo);
        navigation.navigate("DocotrsInfoScreen",{doctorInfo:doctInfo})
    }
 
    
      
    return(
        <SafeAreaView>
{doctorList.map(doct=>{
    console.log(doct);
    return(
        <Box>
            <Box flex={1} style={styles.card}>
            <ScrollView>
                <VStack>
            <HStack>
                <Box>
                  {/* <Image source={{uri:`${doct.Image}`}} style={{width:100 , height:100}}></Image> */}
                  <Avatar bg="green.500" source={{uri:`${doct.Image}`}} size="md">
      DR
      </Avatar>
                </Box>
                <Box>
                    <VStack>
                        <Text>{doct.Name}</Text>
                        <Text>{doct.departmentInArabic}</Text>
                        
                    </VStack>
                </Box>
            </HStack>
            <Box>
                <Text>{doct.titleInArabic}</Text>
                <Text> جنيه{doct.Price}</Text>
                <Text>متاح الان  to be removed</Text>
                <Button onPress={()=>goToDoctorInfo(doct)}>!احجز الان</Button>
            </Box>
            </VStack>
            </ScrollView>
            </Box>
    </Box>
    )
})}
    
      
    </SafeAreaView>
    )
}


export default DoctorsOfDepartment;