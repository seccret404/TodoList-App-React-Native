import React,{useState} from "react";
import Footer from "./footer";
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,FlatList,ScrollView}  from "react-native";

const data = [
     { id: "1",  imageSource: require("./img/icon.png") },
     { id: "2", imageSource: require("./img/icon.png") },
     { id: "3",  imageSource: require("./img/icon.png") },
   ];
export default function Create(){
     const [time, setTime] = useState("");
     const [selectedItems, setSelectedItems] = useState([]);

  const handleTimeChange = (text) => {
    // Batasi nilai waktu antara "00:00" dan "23:59"
    if (isValidTimeFormat(text)) {
      setTime(text);
    }
  };

  const isValidTimeFormat = (text) => {
    // Fungsi untuk memvalidasi format waktu
    const pattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return pattern.test(text);
  };

  const handleButtonPress = () => {
    // Lakukan sesuatu dengan nilai waktu
    console.log("Selected time:", time);
  };

  //slider
  const toggleItem = (itemId) => {
     setSelectedItems((prevSelectedItems) =>
       prevSelectedItems.includes(itemId)
         ? prevSelectedItems.filter((item) => item !== itemId)
         : [...prevSelectedItems, itemId]
     );
   };
 
   const renderItem = ({ item }) => (
     <TouchableOpacity
       style={[
         style.itemContainer,
         selectedItems.includes(item.id) ? style.selectedItem : null,
       ]}
       onPress={() => toggleItem(item.id)}
     >
       <Image source={item.imageSource} style={style.itemImage} />
       <Text style={style.itemLabel}>{item.label}</Text>
     </TouchableOpacity>
   );
     return(
          <View style={style.container}>
               <View style={style.head}>
                    <View style={style.headContent}>
                         <Text style={style.create}>
                              Create Task
                         </Text>
                    </View>
                    <View style={style.headContent}>
                    <Image
               source={require("./img/figma.png")}
               style={style.imgCreate}
             />
                    </View>
               </View>
               
               <ScrollView>
                   <View style={style.form}>
                    <Text style={style.label}>
                         Title
                    </Text>
                    <TextInput style={style.input} placeholder="enter your title task">

                    </TextInput>
                    <Text style={style.label}>
                         Descriptions
                    </Text>
                    <TextInput style={style.area} placeholder="enter yout descriptions task" multiline={true}>

                    </TextInput>

                    <View style={style.time}>
                         <View style={style.timeTask}>
                              <Text style={style.start}>Start</Text>
                              <TextInput style={style.inputStart} value={time}
                                   onChangeText={handleTimeChange}
                                   keyboardType="numeric"
                                   maxLength={5}
                                   placeholder="HH:MM">

                              </TextInput>
                         </View>
                         <View style={style.timeTask}>
                              <Text style={style.end}>End</Text>
                              <TextInput style={style.inputStart} value={time}
                                   onChangeText={handleTimeChange}
                                   keyboardType="numeric"
                                   maxLength={5}
                                   placeholder="HH:MM">

                              </TextInput>
                         </View>
                    </View>
                    <View style={style.contentSlider}>
                         <Text style={style.avatar}>Select Avatar</Text>
                         <View style={style.slider}>
                    <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
                    </View>
                    </View>
                    <View  style={style.save}>
                         <TouchableOpacity>
                              <Text style={style.textSave}>
                                   Add Task
                              </Text>
                         </TouchableOpacity>
                    </View>
                    
               </View> 
               </ScrollView>
               
          </View>
     )
}

const style = StyleSheet.create({
     container:{
          flexDirection:"column",
          height:"100%",
          backgroundColor:"#116A7B"

     },
     head:{
          flexDirection:"row",
          justifyContent:"space-between",
          marginLeft:20,
          marginRight:20,
          marginTop:20
     },
     headContent:{
          alignItems:"center",
          justifyContent:"center"

     },
     create:{
          color:"#ffffff",
          fontWeight:"bold",
          fontSize:18
     },
     imgCreate:{
          width:50,
          height:50,
          borderRadius:10
     },
     form:{
          marginLeft:20,
          marginRight:20,
          marginTop:20
     },
     label:{
          color:"#ffffff",
          fontWeight:"bold",
          marginTop:10

     },
     input:{
          backgroundColor:"#C2DEDC",
          height:50,
          borderRadius:5,
          color:"#0B4C59",
          paddingLeft:10,
          marginTop:5
     },
     area:{
          backgroundColor:"#C2DEDC",
          borderRadius:5,
          color:"#0B4C59",
          paddingLeft:10,
          marginTop:5,
          textAlignVertical: "top",
          height:150,
          paddingTop:5
     },
     time:{
          flexDirection:"row",
          justifyContent:"space-between"
     },

     start:{
          color:"#ffffff",
          paddingTop:10,
          fontWeight:"bold"
     },
     inputStart:{
          backgroundColor:"#C2DEDC",
          width:130,
          height:50,
          textAlign:"center",
          borderRadius:10,
          fontWeight:"bold",
          color:"#116A7B"     
     },
     end:{
          color:"#ffffff",
          fontWeight:"bold",
          paddingTop:10
     },
     slider:{
          width:130,
          
     },
     contentSlider:{
     alignItems:"center",
          justifyContent:"center"
     },
     itemImage:{
          width:120,
          height:170,
          borderRadius:10,
          marginLeft:10,
          marginRight:10
          
     },
     avatar:{
          color:"#ffffff",
          marginTop:10,
          fontWeight:"bold"

     },
     save:{
          alignItems:"center",
          justifyContent:"center"
     },
     textSave:{
          backgroundColor:"#C2DEDC",
          width:200,
          textAlign:"center",
          padding:10,
          color:"#116A7B",
          borderRadius:10,
          marginTop:20,
          marginBottom:20

     }








});