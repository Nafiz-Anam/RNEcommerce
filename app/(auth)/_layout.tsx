import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="otp"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="password"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="password-recovery"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="password-otp"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="create-password"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="slider"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>

            <StatusBar style="dark" />
        </>
    );
};

export default AuthLayout;
