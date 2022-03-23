
import { NativeBaseProvider } from "native-base"
import DoctorsInfoComp from '../Components/DoctorsInfo'

const DocotrsInfoScreen=({navigation, route})=>{
    console.log(route);
    const doctInfo = route.params.doctorInfo ;
    console.log(doctInfo);
    return(
        <NativeBaseProvider>
            <DoctorsInfoComp   data = {doctInfo}/>
        </NativeBaseProvider>
    )
}

export default DocotrsInfoScreen

