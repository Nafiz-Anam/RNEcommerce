import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import OTPInput from "@/components/OTPInput";

const OTPScreen = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChangeOTP = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require("@/assets/images/Bubbles3.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.container}>
                <View style={styles.middleContent}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("@/assets/images/placeholderuser.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.header}>Hello, Romina!!</Text>
                    <Text style={styles.subTitle}>Type your OTP</Text>
                    <OTPInput onChangeOTP={handleChangeOTP} />
                </View>
                <View style={styles.bottomPart}>
                    <CustomButton
                        title="Verify OTP"
                        handlePress={() => router.push("/sign-up")}
                        isLoading={false}
                    />
                    <TouchableOpacity onPress={() => router.back()}>
                        <View style={styles.bottomTextArea}>
                            <Text style={styles.bottomText}>Not You?</Text>
                            <Image
                                source={require("@/assets/images/Button.png")}
                                style={styles.btnLogo}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OTPScreen;

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
    },
    header: {
        fontSize: 40,
        fontWeight: "700",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "300",
        marginBottom: 20,
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
    bottomTextArea: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
    },
    bottomText: { fontSize: 18, fontWeight: "300" },
    btnLogo: { width: 30, height: 30, marginLeft: 15 },
});
