import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

type SettingsItemProps = {
    title: string;
    value?: string;
    onPress: () => void;
};

const SettingsItem: React.FC<SettingsItemProps> = ({
    title,
    value,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: "row", gap: 25 }}>
                {value && <Text style={styles.value}>{value}</Text>}
                <Image
                    source={require("@/assets/images/right-arrow.png")}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5",
    },
    title: {
        fontSize: 18,
        fontWeight: "400",
    },
    value: {
        color: "#888",
        fontWeight: "300",
    },
    image: {
        width: 12,
        height: 18,
    },
});

export default SettingsItem;
