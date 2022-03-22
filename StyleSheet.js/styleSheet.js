
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
       
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems:"center",
      },
    smallBoxes:{
        borderRadius:15,
         backgroundColor: 'white',
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
        width:350,
        alignItems:"stretch"

    },
    departmanetsBoxes:{
         backgroundColor:"white",
         color:"blue"
    },
    inputField:{
        borderRadius:15,

    },
    bookingButton:{
       width:150,
       backgroundColor:"#DCF1ED",
      
      
       margin:5,
       alignItems:"stretch"

    },
    card:{
        
        backgroundColor:"white",
        color:"black",
        marginBottom:"7px",



    },
    timeTableBox:{
      display:"flex" , 
      flexDirection:"row"
      
    }


})

export default styles;