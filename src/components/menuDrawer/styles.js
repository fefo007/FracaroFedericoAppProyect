import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    drawerContainer:{
        backgroundColor:colors.tertiaryColor,
        height:'100%',
        padding:20
    },
    buttonContainer:{
        marginTop:20,
        marginBottom:20,
        borderRadius:15,
        width:'90%',
        height:50
    },
    imageContainer:{
        width:0,
        height:0
    },
    textContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    buttomText:{
        fontSize:25
    }
})

export default styles