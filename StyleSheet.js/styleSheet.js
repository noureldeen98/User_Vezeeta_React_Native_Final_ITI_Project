
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


    box: {
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
      
    },



    ////style Auth
    containerAuth: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageAuth: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    login: {
        width: 370,
        height: 560,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1,
        marginVertical: 30
    },
    inputAuth: {
        width: 250,
        height: 40,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ffffff90',
        marginBottom: 20
    },
    buttonAuth: {
        width: 250,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },





})

export default styles;