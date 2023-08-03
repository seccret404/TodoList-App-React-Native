import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Footer(){
     const navigation =  useNavigation();

     const handleNav = () => {
          navigation.navigate('Create');
     }
     return(
          <View style={style.radius}>
               <TouchableOpacity onPress={handleNav}>
               <View style={style.boxcros}>
                    <Text style={style.cros}>
                         +
                         
                    </Text>
                    <Text style={style.info}>Create new</Text>
               </View>

               </TouchableOpacity>
          </View>
     )
}

const style = StyleSheet.create({
     radius:{
          alignItems:"center",
          paddingTop:5
     },
     boxcros:{
          backgroundColor:"#C2DEDC",
          width:100,
          height:50,
          alignItems:"center",
          justifyContent:"center",
          borderRadius:10,
          

          
     },
     cros:{
          fontSize:30,
          color:"#0B4C59",
          fontWeight:"bold"
          
     },
     info:{
          marginTop:-10,
          fontSize:10,
          color:"#0B4C59"
     }


})