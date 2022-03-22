
import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import LoginComponent from '../Components/Login';
const LoginScreen=()=>{
    return(
        <NativeBaseProvider>
            <LoginComponent/>
        </NativeBaseProvider>
    )
}

export default LoginScreen;