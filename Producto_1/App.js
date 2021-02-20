import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import{ NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

function InicioScreen({navigation})
{
  return (
    <View style={styles.container}>
      <View style={{width: "100%",flex:1, alignItems:"center", paddingBotton:30, paddingTop:100}} >
        <Image source={require('./assets/image/goku.png')}  style={styles.logo} resizeMode="contain"/>
      </View>
        <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Goku
        </Text>

        <TouchableOpacity>

          <Text  style={styles.boton1} onPress={() =>{navigation.navigate("Vegeta")}}>
            Siguiente
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Otra({navigation})
{
  

  return (
    <View style={styles.container}>
    <View style={{width: "100%",flex:1, alignItems:"center", paddingBottom:30, paddingTop:100}} >
      <Image source={require('./assets/image/vegeta.png')}  style={styles.logo} resizeMode="contain"/>
    </View>
      <View style={{flex:2, alignItems:"center"}}>
      <Text style={styles.titulo}>
      vegeta
      </Text>

      <TouchableOpacity>

        <Text  style={styles.boton2} onPress={() =>{navigation.navigate("Trunks")}}>
      Siguiente
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

  
}


function Trunks({navigation})
{
  

  return (
    <View style={styles.container}>
    <View style={{width: "100%",flex:1, alignItems:"center", paddingBottom:30, paddingTop:100}} >
      <Image source={require('./assets/image/trunks.png')}  style={styles.logo} resizeMode="contain"/>
    </View>
      <View style={{flex:2, alignItems:"center"}}>
      <Text style={styles.titulo}>
     Trunks
      </Text>

      <TouchableOpacity>

        <Text  style={styles.boton3} onPress={() =>{navigation.navigate("Picoro")}}>
      Siguiente
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
  }
function Picoro({navigation})
{
  

  return (
    <View style={styles.container}>
    <View style={{width: "100%",flex:1, alignItems:"center", paddingBottom:30, paddingTop:100}} >
      <Image source={require('./assets/image/Picoro.png')}  style={styles.logo} resizeMode="contain"/>
    </View>
      <View style={{flex:2, alignItems:"center"}}>
      <Text style={styles.titulo}>
    Picoro
      </Text>

      <TouchableOpacity>

        <Text  style={styles.boton4} onPress={() =>{navigation.navigate("Numero17")}}>
      Siguiente
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
  }

function Numero17({navigation})
{
  

  return (
    <View style={styles.container}>
    <View style={{width: "100%",flex:1, alignItems:"center", paddingBottom:30, paddingTop:100}} >
      <Image source={require('./assets/image/Androide_17.png')}  style={styles.logo} resizeMode="contain"/>
    </View>
      <View style={{flex:2, alignItems:"center"}}>
      <Text style={styles.titulo}>
      Numero17
      </Text>

      <TouchableOpacity>

        <Text  style={styles.boton5} onPress={() =>{navigation.navigate("Goku")}}>
      Siguiente
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
}



const Main = createStackNavigator();


export default function App() {
  return (
     <NavigationContainer>
       <Main.Navigator>
         <Main.Screen name="Goku" component={InicioScreen}/>
         <Main.Screen name="Vegeta" component={Otra}/>
         <Main.Screen name="Trunks" component={Trunks}/>
         <Main.Screen name="Picoro" component={Picoro}/>
         <Main.Screen name="Numero17" component={Numero17}/>
         
        </Main.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{

    width:"80%",
    height:"80%",
    flex:1
  },

  titulo:{

    fontSize:20,
    color:'darkblue',
    fontWeight:'bold',
   marginBottom:20
  },

  boton1:
  {
    backgroundColor:'orange',
    paddingTop: 10 ,
    paddingBottom:10,
    width:200,
    borderRadius:30,
    alignItems:'center'
  },
  boton2:
  {
    backgroundColor:'blue',
    paddingTop: 10 ,
    paddingBottom:10,
    width:200,
    borderRadius:30,
    alignItems:'center'
  },
  boton5:
  {
    backgroundColor:'red',
    paddingTop: 10 ,
    paddingBottom:10,
    width:200,
    borderRadius:30,
    alignItems:'center'
  },
  boton4:
  {
    backgroundColor:'green',
    paddingTop: 10 ,
    paddingBottom:10,
    width:200,
    borderRadius:30,
    alignItems:'center'
  },
  boton3:
  {
    backgroundColor:'purple',
    paddingTop: 10 ,
    paddingBottom:10,
    width:200,
    borderRadius:30,
    alignItems:'center'
  }
});