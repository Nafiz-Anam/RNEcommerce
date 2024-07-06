import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    isLoading: boolean;
    backgroundColor?: string ;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    handlePress,
    isLoading,
    backgroundColor = "#004CFF", // Default background color
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[styles.btn, { backgroundColor }]}
            disabled={isLoading}
        >
            <Text style={styles.label}>{title}</Text>
            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    style={{ marginLeft: 15 }}
                />
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    btn: {
        borderRadius: 15,
        width: "100%",
        minHeight: 62,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    label: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "300",
    },
});
