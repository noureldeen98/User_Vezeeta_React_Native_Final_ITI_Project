import { NativeBaseProvider } from "native-base"
import Departments from '../Components/Departments'

const DepartmentsScreen=()=>{
    return(
        <NativeBaseProvider>
            <Departments/>
        </NativeBaseProvider>
    )
}

export default DepartmentsScreen