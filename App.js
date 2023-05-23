import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import {useFonts} from 'expo-font'
import { StyleSheet} from 'react-native';
import DrawerNavigation from './src/navigation/drawerNavigation/DrawerNavigation';


export default function App() {
  const [loaded] = useFonts({
    'josefinSans-regular':require('./src/assets/fonts/JosefinSans-Regular.ttf')
  })

  if(!loaded){
    return null
  }

  return (
    <NavigationContainer >
      <DrawerNavigation/>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDFFBB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  scrollContainer:{
    flex:1,
    marginTop:0,
    marginBottom:10,
    width:'100%',
    height:'100%',
    alignItems:'center',
    alignContent:'space-between',
  },
  scroll:{
    backgroundColor:'pink',
    marginTop:10
  },
  flatContainer:{
    width:400,
    height:200,
  },
  flat:{
    backgroundColor:'yellow',
    borderColor:'black',
    borderWidth:5
  },
  input:{
    width:300,
    height:50,
    backgroundColor:'lightblue',
    borderRadius:50,
    paddingLeft:10,
  },
  headerFont:{
    fontFamily:'josefinSans-regular'
  }
});
