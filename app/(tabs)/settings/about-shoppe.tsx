import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutShoppe = () => {
    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("@/assets/images/logo.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <Text style={styles.header}>About Shoppe</Text>
                    <Text style={styles.description}>
                        Shoppe - Shopping UI kit" is likely a user interface
                        (UI) kit designed to facilitate the development of
                        e-commerce or shopping-related applications. UI kits are
                        collections of pre-designed elements, components, and
                        templates that developers and designers can use to
                        create consistent and visually appealing user
                        interfaces.
                    </Text>
                    <Text style={styles.description}>
                        If you need help or you have any questions, feel free to
                        contact me by email.
                    </Text>
                    <Text style={styles.email}>hello@mydomain.com</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "30%",
    },
    header: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        marginBottom: 15,
        lineHeight: 28,
    },
    email: {
        fontSize: 18,
        fontWeight: "700",
        color: "#004CFF",
    },
});

export default AboutShoppe;
