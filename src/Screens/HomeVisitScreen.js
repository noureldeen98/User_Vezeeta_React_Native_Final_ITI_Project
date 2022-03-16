

import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import HomeVisit from '../Components/HomeVisit'


const HomeVisitScreen=()=>{
    return(
        <NativeBaseProvider>
            <HomeVisit/>
        </NativeBaseProvider>
    )
}

export default HomeVisitScreen;