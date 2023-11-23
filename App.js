// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
  // return (
  //   <View>
  //     <Text>Hello, smile!</Text>
  //   </View>
  // );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { Text, View, Image, TextInput, ScrollView } from "react-native";
import favicon from "./assets/favicon.png";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

function App() {
const [text, setText] = useState(null);
// return (
//   <ScrollView>
//     <Text style={styles.text}>Hello, smile!</Text>
//     <Image
//       style={styles.image}
//       source={{
//         uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
//       }}
//     ></Image>
//     <Image source={favicon}></Image>
//     <TextInput
//       style={styles.input}
//       value={text}
//       onChangeText={setText}
//     ></TextInput>

//   </ScrollView>
  
// );

// return (
//   <View
//     style={[
//       styles.container,
//       {
//         // Try setting `flexDirection` to `"row"`.
//         flexDirection: "column",
//       },
//     ]}
//   >
//     <View style={{ flex: 1, backgroundColor: "red" }} />
//     <View style={{ flex: 2, backgroundColor: "darkorange" }} />
//     <View style={{ flex: 4, backgroundColor: "green" }} />
//   </View>
// );
// }

// const styles = StyleSheet.create({

//   text: {
//     fontSize: 50,
//     paddingTop: 50,
//   },
  
//   image: {
//     height: 500,
//     width: 500,
//     resizeMode: "contain",
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

export default App;