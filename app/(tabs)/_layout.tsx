import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome size={28} name="circle-o" color="red" />
          ),
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          title: "About",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome size={28} name="pie-chart" color="red" />
          ),
        }}
      />
    </Tabs>
  );
}
