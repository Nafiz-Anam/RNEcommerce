import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TermsAndConditions = () => {
    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={styles.header}>Terms and Conditions</Text>
                    <Text style={styles.description}>
                        These Terms and Conditions ("Terms", "Terms and
                        Conditions") govern your relationship with Shoppe
                        application (the "Service") operated by Shoppe ("us",
                        "we", or "our").
                    </Text>
                    <Text style={styles.description}>
                        Please read these Terms and Conditions carefully before
                        using our Service.
                    </Text>
                    <Text style={styles.subHeader}>1. Introduction</Text>
                    <Text style={styles.description}>
                        Your access to and use of the Service is conditioned on
                        your acceptance of and compliance with these Terms.
                        These Terms apply to all visitors, users and others who
                        access or use the Service.
                    </Text>
                    <Text style={styles.subHeader}>2. Accounts</Text>
                    <Text style={styles.description}>
                        When you create an account with us, you must provide us
                        information that is accurate, complete, and current at
                        all times. Failure to do so constitutes a breach of the
                        Terms, which may result in immediate termination of your
                        account on our Service.
                    </Text>
                    <Text style={styles.subHeader}>3. Termination</Text>
                    <Text style={styles.description}>
                        We may terminate or suspend access to our Service
                        immediately, without prior notice or liability, for any
                        reason whatsoever, including without limitation if you
                        breach the Terms.
                    </Text>
                    <Text style={styles.description}>
                        If you have any questions about these Terms, please
                        contact us at hello@mydomain.com.
                    </Text>
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
        paddingTop: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 20,
        marginBottom: 10,
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

export default TermsAndConditions;
