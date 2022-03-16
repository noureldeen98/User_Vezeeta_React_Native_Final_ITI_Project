
import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import HomeMainComponent from '../Components/HomeMainContent'

const HomeScreen=()=>{
    return(
        <NativeBaseProvider>
            <HomeMainComponent/>
        </NativeBaseProvider>
    )
}

export default HomeScreen;