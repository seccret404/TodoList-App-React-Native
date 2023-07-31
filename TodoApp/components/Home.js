import React from "react";

import { Button, View, Text ,StyleSheet } from "react-native";



export default function Home({navigation}){
     const today = new Date();
      const day = today.toLocaleDateString('en-US',{weekday:'long'});
          return(
               <View style={style.container}>
                    <View style={style.head}>
                         <View style={style.headContent} >
                              <Text style={style.name}>
                                   Hi EduHeny,
                              </Text>
                              <Text>{day}</Text>
                         </View>
                         <View style={style.headContent}>
                              <Text>day</Text>
                         </View>

                    </View>  

                    
               </View>
          )
}

const style = StyleSheet.create({
     container:{
         backgroundColor:"#116A7B",
         height:"100%"
     },
     head:{
          flexDirection: "row", // Mengatur orientasi ke horizontal (secara default adalah vertical)
          justifyContent: "space-between", // Menempatkan kolom pada bagian kiri dan kanan layar
          paddingHorizontal: 20, // Membuat ruang di sisi kiri dan kanan container
          marginTop: 20, // Jarak dari atas layar
     },
     headContent: {
          backgroundColor: "#f0f0f0",
          flex: 1, // Memberi masing-masing kolom fleksibilitas agar mengambil setengah lebar container
          paddingVertical: 20, // Membuat ruang di sisi atas dan bawah kolom
          
        },
        name:{
          fontSize:"24px",
          fontWeight:"bold",
          color:"white",
          

        }
})