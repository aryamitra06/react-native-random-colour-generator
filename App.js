import { StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [color, setColor] = useState(0);

  const genColor = () =>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let gen_color = `rgb(${red}, ${green}, ${blue})`
    setColor(gen_color);
  }
  return (
    <>
      <StatusBar/>
      <View style={styles.container}>

        <Text style={styles.font}>Generate Random Colour</Text>

        <Pressable style={styles.button} onPress={() => genColor()}>
          <Text style={styles.text}>Generate</Text>
        </Pressable>

        <View
        style={{
          marginTop: 20,
          backgroundColor: color,
          height: 300,
          width: "85%",
          borderRadius: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        >
        <Text
        style={{
          color: "white",
          fontSize: 20
        }}
        >
        {color}
        </Text>
        </View>


      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 4,
  },
  
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
