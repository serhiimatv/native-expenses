import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MONTH_NAMES_EN } from "../../constants/constant";

export default function Page() {
  const date = new Date();
  // coment
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{MONTH_NAMES_EN[date.getMonth()]}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={{}} onPress={() => router.push("/expenses")}>
            <Text> - </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
