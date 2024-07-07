import React from "react";
import { View, Text, StyleSheet } from "react-native";

type SettingsSectionProps = {
    title: string;
    children: React.ReactNode;
};

const SettingsSection: React.FC<SettingsSectionProps> = ({
    title,
    children,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 10,
    },
});

export default SettingsSection;
