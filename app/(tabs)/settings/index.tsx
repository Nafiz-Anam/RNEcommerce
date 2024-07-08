import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import SettingsSection from "@/components/SettingsSection";
import SettingsItem from "@/components/SettingsItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";

const Settings = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleDeleteAccount = () => {
        // Implement delete account logic
        setModalVisible(false);
    };
    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Settings</Text>

                <SettingsSection title="Personal">
                    <SettingsItem
                        title="Profile"
                        onPress={() => router.push("/(tabs)/settings/profile")}
                    />
                    <SettingsItem
                        title="Shipping Address"
                        onPress={() =>
                            router.push("/(tabs)/settings/shipping-address")
                        }
                    />
                    <SettingsItem title="Payment Methods" onPress={() => "#"} />
                </SettingsSection>

                <SettingsSection title="Shop">
                    <SettingsItem
                        title="Country"
                        value="Vietnam"
                        onPress={() =>
                            router.push("/(tabs)/settings/country-selector")
                        }
                    />
                    <SettingsItem
                        title="Currency"
                        value="$ USD"
                        onPress={() =>
                            router.push("/(tabs)/settings/currency-selector")
                        }
                    />
                    <SettingsItem
                        title="Sizes"
                        value="UK"
                        onPress={() =>
                            router.push("/(tabs)/settings/size-selector")
                        }
                    />
                    <SettingsItem
                        title="Terms and Conditions"
                        onPress={() =>
                            router.push("/(tabs)/settings/termsandconditions")
                        }
                    />
                </SettingsSection>

                <SettingsSection title="Account">
                    <SettingsItem
                        title="Language"
                        value="English"
                        onPress={() =>
                            router.push("/(tabs)/settings/language-selector")
                        }
                    />
                    <SettingsItem
                        title="About Shoppe"
                        onPress={() =>
                            router.push("/(tabs)/settings/about-shoppe")
                        }
                    />
                </SettingsSection>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={[styles.deleteOption]}>Delete My Account</Text>
                </TouchableOpacity>

                <Text style={styles.footerTitle}>Shoppe</Text>
                <Text style={[styles.footer, { marginBottom: 50 }]}>
                    Version 1.0 July, 2024
                </Text>
            </ScrollView>

            <DeleteAccountModal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onDelete={handleDeleteAccount}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    deleteOption: {
        fontSize: 16,
        color: "red",
        marginTop: 20,
    },
    footerTitle: {
        fontSize: 22,
        fontWeight: "700",
        marginTop: 40,
    },
    footer: {
        marginTop: 5,
        fontSize: 14,
    },
});

export default Settings;
