import { View, Text, StyleSheet } from "react-native";

const Greeting = () => {
    return (
        <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Hello, Romina!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    greetingContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    greetingText: {
        fontSize: 32,
        fontWeight: "700",
    },
});

export default Greeting;
