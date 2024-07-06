import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MyOrders = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Orders</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>To Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>To Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>To Review</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#E5EBFC",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 20,
        color: "#004CFF",
        fontWeight: "500",
    },
});

export default MyOrders;
