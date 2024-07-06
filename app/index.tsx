import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const InitialScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >
                <View style={styles.container}>
                    <View style={styles.topPart}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require("@/assets/images/logo.png")}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.title}>Shoppe</Text>
                        <Text style={styles.subTitle}>
                            Beautiful eCommerce UI Kit for your online store
                        </Text>
                    </View>

                    <View style={styles.bottomPart}>
                        <CustomButton
                            title="Let's get started"
                            handlePress={() => router.push("/profile")}
                            isLoading={false}
                        />
                        <Link href="/sign-in">
                            <View style={styles.bottomTextArea}>
                                <Text style={styles.bottomText}>
                                    I already have an account?
                                </Text>
                                <Image
                                    source={require("@/assets/images/Button.png")}
                                    style={styles.btnLogo}
                                    resizeMode="contain"
                                />
                            </View>
                        </Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
};

export default InitialScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    topPart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    logoContainer: {
        width: "40%",
        padding: 30,
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
    },
    logo: {
        width: "100%",
        height: "100%",
    },
    title: { fontSize: 55, fontWeight: "700", marginTop: 20 },
    subTitle: {
        fontSize: 28,
        width: "80%",
        textAlign: "center",
        fontWeight: "300",
        marginTop: 10,
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
