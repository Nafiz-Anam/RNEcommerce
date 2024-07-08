import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SettingsLayout = () => {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="shipping-address"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="country-selector"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar style="dark" />
        </>
    );
};

export default SettingsLayout;
