import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

const ShopHeader: React.FC = () => {
    const handleCameraClick = () => {
        // Handle the camera icon click
        console.log("Camera icon clicked");
    };

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Shop</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#c7c7c7"
                />
                <TouchableOpacity onPress={handleCameraClick}>
                    <Image
                        source={require("@/assets/images/camera.png")}
                        style={styles.cameraIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        borderRadius: 25,
        paddingHorizontal: 20,
        flex: 1,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        height: 52,
        fontSize: 16,
        color: "#000",
        borderWidth: 0,
        borderRadius: 25,
        paddingHorizontal: 5,
        backgroundColor: "#F8F8F8",
    },
    cameraIcon: {
        width: 30,
        height: 25,
        marginLeft: 5,
    },
});

export default ShopHeader;
