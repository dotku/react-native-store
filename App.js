import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { storeConfig } from "./data";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{storeConfig.name}</Text>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <TextInput placeholder="search" value="" style={styles.input} />
        <Icon name="bag" size={30} style={{ paddingTop: 14 }} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 8, borderRadius: 8, backgroundColor: "#ddd" }}>
          <Image
            style={{
              height: 100,
              width: 160,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            source={{
              uri: "https://ae01.alicdn.com/kf/H6f896ed52c494ee5aec1e65ab0121b5aV.jpg_Q90.jpg_.webp",
            }}
          />
          <Text style={{ padding: 8 }}>Product Name A</Text>
        </View>
        <View style={{ margin: 8, borderRadius: 8, backgroundColor: "#ddd" }}>
          <Image
            style={{
              height: 100,
              width: 160,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            source={{
              uri: "https://ae01.alicdn.com/kf/H6f896ed52c494ee5aec1e65ab0121b5aV.jpg_Q90.jpg_.webp",
            }}
          />
          <Text style={{ padding: 8 }}>Product Name B</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderRadius: 3,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
