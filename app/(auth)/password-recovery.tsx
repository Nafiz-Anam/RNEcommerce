import {
    View,
    Text,
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

const PasswordRecovery = () => {
    const [selectedMethod, setSelectedMethod] = useState("SMS");

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require("@/assets/images/Bubbles3.png")}
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
                        <Text style={styles.header}>Password Recovery</Text>
                        <Text style={styles.subTitle}>
                            How you would like to restore your password?
                        </Text>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                                style={[
                                    styles.methodButtonSms,
                                    // selectedMethod === "SMS" &&
                                    //     styles.selectedButton,
                                ]}
                                onPress={() => setSelectedMethod("SMS")}
                            >
                                <Text
                                    style={[
                                        styles.methodButtonTextSms,
                                        // selectedMethod === "SMS" &&
                                        //     styles.selectedButtonText,
                                    ]}
                                >
                                    SMS
                                </Text>
                                {selectedMethod === "SMS" ? (
                                    <View style={styles.checkMark}>
                                        <Image
                                            source={require("@/assets/images/Check.png")}
                                            style={styles.checkIcon}
                                        />
                                    </View>
                                ) : (
                                    <View style={styles.checkMark}>
                                        <Image
                                            source={require("@/assets/images/CheckEmpty2.png")}
                                            style={styles.checkIcon}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.methodButton,
                                    // selectedMethod === "Email" &&
                                    //     styles.selectedButton,
                                ]}
                                onPress={() => setSelectedMethod("Email")}
                            >
                                <Text
                                    style={[
                                        styles.methodButtonText,
                                        // selectedMethod === "Email" &&
                                        //     styles.selectedButtonText,
                                    ]}
                                >
                                    Email
                                </Text>
                                {selectedMethod === "Email" ? (
                                    <View style={styles.checkMark}>
                                        <Image
                                            source={require("@/assets/images/Check.png")}
                                            style={styles.checkIcon}
                                        />
                                    </View>
                                ) : (
                                    <View style={styles.checkMark}>
                                        <Image
                                            source={require("@/assets/images/CheckEmpty.png")}
                                            style={styles.checkIcon}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomPart}>
                        <CustomButton
                            title="Next"
                            handlePress={() => router.push("/password")}
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

export default PasswordRecovery;

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
    buttonGroup: {
        width: "100%",
        alignItems: "center",
    },
    methodButtonSms: {
        width: "80%",
        padding: 15,
        borderRadius: 25,
        marginBottom: 10,
        backgroundColor: "#E5EBFC",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    methodButton: {
        width: "80%",
        padding: 15,
        borderRadius: 25,
        marginBottom: 10,
        backgroundColor: "#FFEBEB",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    // selectedButton: {
    //     backgroundColor: "#DCEFFD",
    // },
    methodButtonTextSms: {
        fontSize: 18,
        fontWeight: "600",
        color: "#004CFF",
    },
    methodButtonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },
    // selectedButtonText: {
    //     color: "#007BFF",
    // },
    checkMark: {
        position: "absolute",
        right: 20,
    },
    checkIcon: {
        width: 30,
        height: 30,
    },
    bottomPart: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 20,
    },
    cancelText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        marginTop: 25,
    },
});
