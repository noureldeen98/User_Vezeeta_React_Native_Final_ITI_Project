
import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import HomeMainComponent from '../Components/HomeMainContent'
import LogoutScreen from './LogoutScreen';

const HomeScreen=()=>{
    return(
        <NativeBaseProvider>
            <HomeMainComponent/>
        </NativeBaseProvider>
    )
}

export default HomeScreen;