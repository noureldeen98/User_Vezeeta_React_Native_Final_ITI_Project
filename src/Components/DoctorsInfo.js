import { HStack, VStack, Image, Box, ScrollView, Text, Center, Avatar , Button } from "native-base"

import { useState } from "react";
import styles from './../../StyleSheet.js/styleSheet';





const DoctorsInfoComp = (props) => {


    const [doctInfo] = useState(props.data)

    const [timeTable] = useState(doctInfo.timeTables)

    console.log(timeTable);

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


                                        <Box h="40" w="20" bg="white"   rounded="md" shadow={3} alignItems="center" justifyContent="center" marginTop={5} >
                                            <Box bg="blue.700" width="100%">
                                                <VStack   alignItems="center" justifyContent="center" >
                                                <Text  color="white">{dateDayTime.day}</Text>
                                                <Text color="white">{dateDayTime.date}</Text>
                                                </VStack>
                                            </Box>

                                            <Box>
                                                <VStack>
                                                    {theHours.map(hour => {
                                                        console.log(hour);
                                                        return (
                                                            
                                                            <Text>{hour.hour}</Text>
                                                            
                                                            
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


                </VStack>
            </ScrollView>
        </Box>
    )
}


export default DoctorsInfoComp