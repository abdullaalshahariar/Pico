import {View, Text, StyleSheet} from "react-native";
import ChatInput from "../../components/ChatInput";
import MeshBackground from "../../components/MeshBackground";   

export function ChatScreen() {
  return (
    <View style={styles.container}>
      <MeshBackground />


      <Text style={styles.header}>Meet Pico</Text>
      <Text style={styles.subheader}>Your Personal Assistant</Text>
      
      <ChatInput value="" onChangeText={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#131314",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 32,
    color: "#E3E3E3",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 22,
    color: "#E3E3E3",
    marginBottom: 32,
  },
});