import { router, Router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Super simple counter</Text>
      <Text>Count: {count}</Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
        <TouchableOpacity
          style={[styles.mybutton, styles.decrease]}
          onPress={() => setCount(count - 1)}
        >
          <Text> - </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mybutton, styles.increase]}
          onPress={() => setCount(count + 1)}
        >
          <Text> + </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={[styles.mybutton, styles.decrease]}
          onPress={() => router.push("/expenses")}
        >
          <Text> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mybutton: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    borderStyle: "solid",
    textAlignVertical: "center",
    alignContent: "center",
    borderWidth: 2,
    borderRadius: "50%",
    height: 40,
    width: 40,
  },
  increase: {
    borderColor: "green",
  },
  decrease: {
    borderColor: "red",
  },
});
