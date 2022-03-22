
import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import SignupComponent from '../Components/Signup';

const SignupScreen=()=>{
    return(
        <NativeBaseProvider>
            <SignupComponent/>
        </NativeBaseProvider>
    )
}

export default SignupScreen;