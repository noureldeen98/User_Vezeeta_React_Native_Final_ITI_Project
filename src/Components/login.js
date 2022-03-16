import { NativeBaseProvider, VStack , Box , Text , Button} from "native-base"


import styles from "../../StyleSheet.js/styleSheet";

const LoginComponent=()=>{

    

    return(
        
            <Box >
                <VStack textAlign="center" alignItems="center">
                    <Text style={{fontWeight:"bolder"}}>انشئ حساب او سجل الدخول</Text>
                    <Text>تستطيع الاستمرار عبر </Text>
                    <Button>الفيسبوك</Button>
                    <Button>رقم المحمول</Button>
                    <Button>جوجل </Button>
                    <Button>البريد الالكترونى</Button>
                </VStack>
            </Box>
        
    )
}

export default LoginComponent;