import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

const CustomButton = ({ title, handlePress, isLoading }: any) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={styles.btn}
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
        backgroundColor: "#004CFF",
        borderRadius: 15,
        width: "100%",
        minHeight: 62,
        display: "flex",
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
