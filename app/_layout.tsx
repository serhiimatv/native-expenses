import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

export default function Layout() {
  const visibility = NavigationBar.setBackgroundColorAsync("transparent");

  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen name="expenses/index" options={{ title: "Expenses" }} />
      </Stack>
    </>
  );
}
