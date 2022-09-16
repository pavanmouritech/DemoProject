import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    AlbumContainer: {
         padding: 10
      },
      title1: {
        fontSize: 22, 
        padding: 10
      },
      image:{
        width: 100, 
        height: 150, 
        borderRadius: 10,
      },
      price:{
        alignItems:'center',
        bottom:'30%',
        right:'12%'
      },
      category:{
        alignItems:'center',
        bottom:'40%',
        left:'12%',
      },
});
export default styles;