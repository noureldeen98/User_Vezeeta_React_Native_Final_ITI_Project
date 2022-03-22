
import { Box, Text, HStack, VStack, Input,Button,Image , ScrollView , Heading  } from 'native-base'


import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import height from 'dom-helpers/cjs/height';
import Hstack from 'native-base/src/theme/components/hstack';

import styles from '../../StyleSheet.js/styleSheet';
import box from 'native-base/src/theme/components/box';
import Vstack from 'native-base/src/theme/components/vstack';
import { useNavigation } from '@react-navigation/native'
import LogoutScreen from '../Screens/LogoutScreen';


const HomeMainComponent = () => {

    const navigation = useNavigation()


    const navigateToDepartments = () => {
        navigation.navigate("Departments")
    }
    return (

        <>
           

            <ScrollView>
            <LogoutScreen/>
        
                <VStack bg="gray.100" style={styles.container} >
           
                    <HStack flexWrap="wrap">

                        <Box p="2" bg="primary.500" style={styles.smallBoxes}>
                            <Text>كشف عياده</Text>
                        </Box>



                    <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                        <Text>صيدليه </Text>
                    </Box>


                    <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                        <Text>مكالمة دكتور </Text>
                    </Box>

                    <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                        <Text> زياره منزليه</Text>
                    </Box>

                    <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                        <Text>خدمه او عمليه</Text>
                    </Box>




                    </HStack>


                <Box style={styles.box}>
                    <VStack>
                        <Heading size="md" >احجز كشف عياده</Heading>
                        <Input mx="3" placeholder="ابحث بالتخصص , اسم الدكتور" w={300} marginTop={2} marginBottom={3} />
                    </VStack>
                </Box>



                <Box style={styles.box} >
                    <VStack>
                        <Heading size="md">اطلب ادويه</Heading>
                        <Input mx="3" placeholder=" ما الذى تبحث عنه" w={300} marginTop={2} marginBottom={3} />
                        <HStack>

                                <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                                    <Text>روشته / موافقه طبيه </Text>
                                </Box>

                                <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                                    <Text> صورة المنتج</Text>
                                </Box>

                                <Box p="2" bg="primary.500" width="100" style={styles.smallBoxes}>
                                    <Text> استشير صيدلى</Text>
                                </Box>

                            </HStack>
                        </VStack>
                    </Box>



                <Box style={styles.box} height={150}>
                    <HStack>
                        <Image source={{uri:"https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/40482/_next/static/images/homevisits-solution-card/eg/desktop.webp"}} style={{width:100 ,height:100}}/>
                        <VStack>
                        <Heading size="md">زياره منزليه</Heading>
                        <Text > اختار التخصص , و الدكتور هيجيلك البيت</Text>
                        <Box alignItems="flex-end">
                        <Button onPress={navigateToDepartments} style={styles.bookingButton} >احجز الان</Button>
                        </Box>
                        </VStack>
                    </HStack>
                </Box>

                <Box style={styles.box} height={150} alignItems="flex-stretch">
                    <HStack>
                        <Image source={{uri:"https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/40482/_next/static/images/telehealth-solution-card/desktop.webp"}} style={{width:100 ,height:100}}/>
                        <VStack>
                        
                        <Heading size="md"> مكالمة دكتور</Heading>
                        <Text> للمتابعه عبر مكالمة صوتيه او مكالمة فيديو</Text>
                      
                        <Box alignItems="flex-end">
                        <Button onPress={navigateToDepartments} style={styles.bookingButton} >احجز الان</Button>
                        </Box>
                        </VStack>
                    </HStack>
                </Box>





                </VStack>
            </ScrollView>

        </>
    )
}

export default HomeMainComponent;