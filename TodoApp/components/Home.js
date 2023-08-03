import React from "react";
import { Button, View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Clock from "./icon/Clock";


export default function Home({ navigation }) {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });

  const renderBoxTasks = () => {
     const boxTasks = [];
     for (let i = 0; i < 7; i++) {
       boxTasks.push(
         <View style={style.boxTask} key={i}>
           <View style={style.task}>
             <Text style={style.title}>Design Landing Page</Text>
             <View style={style.time}>
               <Clock />
               <Text style={style.textTime}>09.00 Pm - 11.15 Pm</Text>
             </View>
             <Text style={style.timeout}>remaining time : 1h 34 minutes</Text>
           </View>
           <View style={style.task}>
             <Image
               source={require("./img/figma.png")}
               style={style.imageTask}
             />
           </View>
         </View>
       );
     }
     return boxTasks;
   };
  return (
    <View style={style.container}>
      <View style={style.head}>
        <View style={style.headContent}>
          <Text style={style.name}>Hi EduHeny,</Text>
          <Text style={style.tgl}>{day}</Text>
        </View>
        <View style={style.headContent}>
          <Image source={require("./img/icon.png")} style={style.image}></Image>
        </View>
      </View>
      <View style={style.inovation}>
        <Text style={style.invo}>Ini adalah aplikasi todolist</Text>
      </View>
      <View>
        <Text style={style.info}>Your task today,</Text>
      </View>
      <ScrollView>
      {renderBoxTasks()}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#116A7B",
    height: "100%",
  },
  head: {
    flexDirection: "row", // Mengatur orientasi ke horizontal (secara default adalah vertical)
    justifyContent: "space-between", // Menempatkan kolom pada bagian kiri dan kanan layar
    paddingHorizontal: 20, // Membuat ruang di sisi kiri dan kanan container
    marginTop: 20, // Jarak dari atas layar
  },
  headContent: {
    flex: 1, // Memberi masing-masing kolom fleksibilitas agar mengambil setengah lebar container
    paddingVertical: 20, // Membuat ruang di sisi atas dan bawah kolom
  },
  name: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  tgl: {
    color: "#ffffff",
    textDecorationColor: "#ffffff",
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 130,
    borderRadius:10
  },
  inovation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D943",
    padding: 12,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
  
  },
  invo: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  info: {
    marginLeft: 20,
    paddingTop: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  time:{
     flexDirection:"row",
     alignItems:'center'

  },
  textTime:{
     color:"#ECE5C7",
     fontSize:14

  },
  title:{
     color:"#ffffff",
     fontSize:16,
     
  },
  timeout:{
     color:"#C2DEDC",

  },
  boxTask:{
     flexDirection:"row",
     backgroundColor:"#D9D9D943",
     padding:20,
     marginLeft:20,
     marginRight:20,
     borderRadius:10,
     marginTop:10
  },
  imageTask:{
     width:120,
     height:80,
     borderRadius:10,
     marginLeft:20
  }
});
