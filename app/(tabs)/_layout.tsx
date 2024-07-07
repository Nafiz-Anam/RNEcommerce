import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors["light"].tint,
                    // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={
                                    focused
                                        ? "code-slash"
                                        : "code-slash-outline"
                                }
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="shop"
                    options={{
                        title: "Shop",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={
                                    focused
                                        ? "code-slash"
                                        : "code-slash-outline"
                                }
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Settings",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={
                                    focused
                                        ? "code-slash"
                                        : "code-slash-outline"
                                }
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
            <StatusBar style="dark" />
        </>
    );
}
