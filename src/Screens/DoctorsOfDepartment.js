
import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import DoctorsOfDepartment from '../Components/DoctorsOfDepartment'

const DoctorsOfDepartmentScreen=( {navigation, route})=>{
    const {depart} =route.params ;
    return(
        <NativeBaseProvider>
            <DoctorsOfDepartment data = {depart}/>
        </NativeBaseProvider>
    )
}

export default DoctorsOfDepartmentScreen;