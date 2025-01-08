import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#9500ae" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="circle-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          title: "About",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pie-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
