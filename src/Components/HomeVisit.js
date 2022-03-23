import { VStack , Box ,Image ,Text} from "native-base"
import styles from './../../StyleSheet.js/styleSheet';


const HomeVisit=()=>{

    return(
       
        <VStack>
            <Box alignItems="center" bg="blue">
                <VStack>
                <Image source={{uri:"//d9hhrg4mnvzow.cloudfront.net/landing.vezeeta.com/homevisitseg/5a5b6c2c-logo_103y00q000000000000028.png"}} style={{height:50, width:300}}/>
                <Box style={styles.box} bg="lightBlue">
                    <Text>احجز زياره منزليه</Text>
                    <Text>الان من خلال فيزيتا يمكنكحجز زياره منزليه مع دكتور متخصص</Text>
                    <Image source={{uri:"//d9hhrg4mnvzow.cloudfront.net/landing.vezeeta.com/homevisitseg/1de411d4-group-29_105r07r000000000000028.png"}} style={{height:100, width:100}}/>
                </Box>
                </VStack>
            </Box>
            <Box>
                

            </Box>
        </VStack>
    )
}

export default HomeVisit;