import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

const EditProfile = () => {
    const [name, setName] = useState("Romina");
    const [email, setEmail] = useState("gmail@example.com");
    const [password, setPassword] = useState("**********");
    const [image, setImage] = useState<any>(
        require("@/assets/images/profile.png")
    );

    const pickImage = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage({ uri: result.assets[0].uri });
        }
    };

    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Settings</Text>
                <Text style={styles.subHeader}>Your Profile</Text>
                <View style={styles.profileContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={image} style={styles.profileImage} />
                        <TouchableOpacity
                            style={styles.editIconContainer}
                            onPress={pickImage}
                        >
                            <Image
                                source={require("@/assets/images/editButton.png")}
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: "500",
        
    },
    profileContainer: {
        alignItems: "flex-start",
        marginVertical: 20,
    },
    logoContainer: {
        padding: 8,
        aspectRatio: 1,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    editIconContainer: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    editIcon: {
        width: 40,
        height: 40,
    },
    input: {
        height: 52,
        borderWidth: 0,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F8F8F8",
    },
    saveButton: {
        backgroundColor: "#004CFF",
        borderRadius: 25,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    saveButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
});

export default EditProfile;
