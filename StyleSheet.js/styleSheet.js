
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
       
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
      },
    smallBoxes:{
        borderRadius:15,
        // backgroundColor: 'blue',
        color:"black",
        margin:4,
        height:100,
        width:100
    },
    
    box:{
        // height:"auto",
        marginTop:5,
        marginBottom:3,
        borderRadius:15,
        backgroundColor:"white",
        alignItems:"center",
        width:350

    },
    inputField:{
        borderRadius:15,

    }


})

export default styles;