import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const CreatePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require("@/assets/images/Bubbles4.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >
                <View style={styles.container}>
                    <View style={styles.middleContent}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require("@/assets/images/placeholderuser.png")}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.header}>Setup New Password</Text>
                        <Text style={styles.subTitle}>
                            Please, setup a new password for your account
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            autoCapitalize="none"
                            placeholderTextColor="#999"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            autoCapitalize="none"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <View style={styles.bottomPart}>
                        <CustomButton
                            title="Save"
                            handlePress={() =>
                                router.push("/password-recovery")
                            }
                            isLoading={false}
                        />
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreatePassword;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "65%",
        position: "absolute",
        top: 0,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
    },
    middleContent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100%",
    },
    header: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 19,
        fontWeight: "300",
        marginBottom: 20,
        width: "70%",
        textAlign: "center",
    },
    subTitle2: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 20,
        width: "70%",
        textAlign: "center",
    },
    logoContainer: {
        width: "40%",
        padding: 10,
        aspectRatio: 1,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: "100%",
        height: "100%",
    },
    bottomPart: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 20,
    },
    input: {
        width: "100%",
        height: 52,
        borderWidth: 0,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F8F8F8",
    },
    cancelText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        marginTop: 25,
    },
});
