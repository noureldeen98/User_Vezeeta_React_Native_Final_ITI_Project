import { HStack, VStack, Image, Box, ScrollView, Text, Avatar, Button, Modal, FormControl, Input, Center, NativeBaseProvider, Pressable } from "native-base"

import { useState, useEffect } from "react";
import styles from './../../StyleSheet.js/styleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { db , auth } from "../../firebaseConfiguration"






const DoctorsInfoComp = (props) => {


    const [doctInfo] = useState(props.data)

    const [timeTable] = useState(doctInfo.timeTables)

    const [choosedTime, setChoosedTime] = useState()
    const [choosedDay, setChoosedDay] = useState()
    const [choosedDate, setChoosedDate] = useState()


    const [userID , setUserID] = useState()
    

    const [showModal, setShowModal] = useState(false);

    const [yes, setYes] = useState()



    const addAppointment= async( hour,day,date,doc)=>{ // el mfrood de hnb3tlha el h , d , d , bianat el doctor lma 2dos yes
     console.log(doc);
        const datee = date
        const currentTime = hour
        
        

        const usrAppointment=[]
        const newTimeTabes=[]

        const usrObj={
            date: date,
            day: day,
            hour: hour,
            DoctorName:doc.Name
          }
            db.collection('Users').doc(userID).get().then(doc => {
              console.log(doc.data().appointment);
              usrAppointment=doc.data().appointment
              console.log('usrAppointment',usrAppointment)
              usrAppointment.push(usrObj)
            })

            console.log('usrAppointment after add new appointment',usrAppointment)
            AsyncStorage.setItem('AppDate',date)
            AsyncStorage.setItem('AppDay',day)
            AsyncStorage.setItem('AppHour',hour)
            AsyncStorage.setItem('AppDoc',doc.Name)
            const UsrName = AsyncStorage.getItem('Name')
            // const docts=(db.collection('/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors')
            // .where('Name','==',doc.Name));

            // // const details = await db.doc(docts).get()
            // // console.log(details);
            // // details.forEach((doc) => {
            // //   console.log(doc.data().timeTables)

            const docts= await db
            .collection('/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors')
            // Filter results
            .where('Name','==',doc.Name)
            // Limit results
            .get()
            .then(doc => {
              /* ... */
              doc.forEach((doc)=>{
                console.log(doc.data().timeTables);
              
            

              const myTimes = doc.data().timeTables;
              myTimes && myTimes.map(time => {
                if(time.date == datee ) { //
                  // console.log('one',time);//get complete object
                  //loop on hours to edit status
                  time.hours.map(hour => {
                    // console.log('one', hour.hour, 'two', currentTime, 'three', 
                    // (hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
                    // (hour.hour.split(":")[1] == currentTime.split(":")[1]));
                    console.log('before hour', time);
                    if((hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
                    Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1])) {
                      // console.log('hey', hour.hour, 'and', currentTime);
                      // console.log('hello time', hour);
                      const hoursOld = [...time.hours, {hour: hour.hour, status: 'busy'}];
                      const crntTime = hoursOld.find(hour => (hour.hour.split(":")[0] == currentTime.split(":")[0]) && 
                      Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1]));
                      const index = hoursOld.indexOf(crntTime);

                      const newObj = hoursOld.pop(index);
                
                      console.log('hoursOd', hoursOld);
                      console.log('newObj', newObj);
                      var newObj2 = {
                        date: time.date,
                        day: time.day,
                        hours: [...time.hours, {hour: hour.hour, status: 'busy'}]
                      }

                      console.log('new',newObj2);
                      let test = newObj2.hours.filter( (ele, ind) => ind === newObj2.hours.findLastIndex( elem => elem.hour === ele.hour ))
                       console.log('after filter test ',test)

                       var newObj3 = {
                        date: time.date,
                        day: time.day,
                        hours:test
                      }
                    
                      console.log('newObj3 ',newObj3)
                      newTimeTabes.push(newObj3);
                      console.log('add newObj3', newTimeTabes);
                      console.log('usrAppointment after new obj3',usrAppointment)

                      db.collection('Users').doc(userID).update({
                        appointment: usrAppointment
                      })
                    }
                
                  })
                } else {
                    console.log('two', time);
                    newTimeTabes.push(time);
                  }
                })
            
                console.log('new time', newTimeTabes);
                db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id).update({
                  timeTables:newTimeTabes
                }) 
              })
            })
        
            
        }

    



// This function which is used to pickup doctor's time
    const pickingDoctorTime = (theTime,theDAY,theDate) => {
        setShowModal(true)
        setChoosedTime(theTime)
        setChoosedDay(theDAY)
        setChoosedDate(theDate)
    }


    const yesButtonClicked = (hour,day,date,doc) => {
        setYes(true)
        setShowModal(false)
       
            addAppointment(`${choosedTime}`,`${choosedDay}`,`${choosedDate}`,doctInfo)
        
        console.log("clicked");
    }


    const getTheUserID = async () => {
        try {
          const value = await AsyncStorage.getItem('ID');
          if (value !== null) {
            // We have data!!
            setUserID(value)
            console.log(value);
            
          }
        } catch (error) {
          // Error retrieving data
        }
      };

      useEffect(()=>{
        getTheUserID()
      },[])

    return (
        <Box>
            <ScrollView>
                <VStack>
                    {/* da box ll doctor information */}
                    <Box>
                        <HStack>
                            <Avatar bg="green.500" source={{ uri: `${doctInfo.Image}` }} size="md"></Avatar>
                            <Box>
                                <VStack>
                                    <Text>{doctInfo.Name}</Text>
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>

                    {/* da box ll doctor timetable */}

                    <Box>
                        <VStack>
                            <HStack space={3} justifyContent="center" alignItems="center" flexWrap="wrap">

                                {timeTable.map(dateDayTime => {
                                    const [theHours] = useState(dateDayTime.hours)

                                    console.log(theHours);
                                    return (


                                        <Box h="40" w="20" bg="white" rounded="md" shadow={3} alignItems="center" justifyContent="center" marginTop={5} >
                                            <Box bg="blue.700" width="100%">
                                                <VStack alignItems="center" justifyContent="center" >
                                                    <Text color="white">{dateDayTime.day}</Text>
                                                    <Text color="white">{dateDayTime.date}</Text>
                                                </VStack>
                                            </Box>

                                            <Box>
                                                <VStack>
                                                    {theHours.map(hour => {
                                                        console.log(hour);
                                                        return (
                                                            <>
                                                                <Pressable onPress={() => pickingDoctorTime(`${hour.hour}`,`${dateDayTime.day}`, `${dateDayTime.date}`)} key={hour.hour}>
                                                                    <Text>{hour.hour}</Text>
                                                                </Pressable>
                                                            </>


                                                        )
                                                    })}

                                                    <Button bg="red.700">احجز الان!</Button>

                                                </VStack>
                                            </Box>


                                        </Box>

                                    )
                                })}

                            </HStack>
                        </VStack>
                    </Box>





                    <Center>
                        {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px">
                                <Modal.CloseButton />
                                <Modal.Header>Contact Us</Modal.Header>
                                <Modal.Body>
                                    <FormControl>
                                        <FormControl.Label>؟{choosedTime} هل انت متاكد من اختيار هذا الميعاد</FormControl.Label>

                                        {/* </FormControl>
                                    <FormControl mt="3">
                                        <FormControl.Label>Email</FormControl.Label>
                                        <Input /> */}
                                    </FormControl>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setShowModal(false);
                                        }}>
                                            Cancel
                                        </Button>
                                        <Button onPress={() => {

                                            yesButtonClicked(`${choosedTime}` ,`${choosedDay}` ,`${choosedDate}` ,`${doctInfo}`)
                                        }}>
                                            Yes
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>;


                </VStack>
            </ScrollView>
        </Box>
    )
}


export default DoctorsInfoComp