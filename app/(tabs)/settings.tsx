import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import SettingsSection from "@/components/SettingsSection";
import SettingsItem from "@/components/SettingsItem";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Settings</Text>

                <SettingsSection title="Personal">
                    <SettingsItem title="Profile" onPress={() => "#"} />
                    <SettingsItem
                        title="Shipping Address"
                        onPress={() => "#"}
                    />
                    <SettingsItem title="Payment Methods" onPress={() => "#"} />
                </SettingsSection>

                <SettingsSection title="Shop">
                    <SettingsItem
                        title="Country"
                        value="Vietnam"
                        onPress={() => "#"}
                    />
                    <SettingsItem
                        title="Currency"
                        value="$ USD"
                        onPress={() => "#"}
                    />
                    <SettingsItem
                        title="Sizes"
                        value="UK"
                        onPress={() => "#"}
                    />
                    <SettingsItem
                        title="Terms and Conditions"
                        onPress={() => "#"}
                    />
                </SettingsSection>

                <SettingsSection title="Account">
                    <SettingsItem
                        title="Language"
                        value="English"
                        onPress={() => "#"}
                    />
                    <SettingsItem title="About Slada" onPress={() => "#"} />
                </SettingsSection>

                <TouchableOpacity
                    onPress={() => {
                        /* Implement delete account logic */
                    }}
                >
                    <Text style={[styles.deleteOption]}>Delete My Account</Text>
                </TouchableOpacity>

                <Text style={styles.footerTitle}>Shoppe</Text>
                <Text style={[styles.footer, { marginBottom: 50 }]}>
                    Version 1.0 July, 2024
                </Text>
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
