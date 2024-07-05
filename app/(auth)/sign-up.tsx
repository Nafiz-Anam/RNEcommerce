import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import PhoneInput from "react-native-phone-number-input";

const SignUpScreen = () => {
    const [image, setImage] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require("@/assets/images/Bubbles.png")}
                style={styles.backgroundImage}
                resizeMode="contain"
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >
                <View style={styles.container}>
                    <Text style={styles.header}>Create Account</Text>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={{ width: 100 }}
                    >
                        <View style={styles.imageUpload}>
                            {image ? (
                                <Image
                                    source={{ uri: image }}
                                    style={styles.image}
                                />
                            ) : (
                                <Image
                                    source={require("@/assets/images/UploadPhoto.png")}
                                    style={styles.placeholder}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#999"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                        placeholderTextColor="#999"
                    />
                    <PhoneInput
                        defaultValue={phoneNumber}
                        defaultCode="US"
                        layout="first"
                        onChangeText={(text) => {
                            setPhoneNumber(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        containerStyle={styles.phoneContainer}
                        textContainerStyle={styles.phoneTextContainer}
                        placeholder="Your number"
                        textInputProps={{
                            placeholderTextColor: "#999",
                        }}
                    />
                    <CustomButton
                        title="Sign Up"
                        handlePress={() => router.push("/sign-up")}
                        isLoading={false}
                    />

                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "65%",
        position: "absolute",
        top: 0,
        // borderWidth: 2,
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
        // width: "100%",
    },
    header: {
        fontSize: 50,
        fontWeight: "700",
        marginBottom: 20,
        width: "85%",
    },
    imageUpload: {
        width: 100,
        height: 100,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    placeholder: {
        width: 90,
        height: 90,
    },
    input: {
        width: "100%",
        height: 52,
        borderWidth: 0,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F8F8F8",
    },
    phoneContainer: {
        width: "100%",
        borderWidth: 0,
        borderRadius: 25,
        marginBottom: 45,
        backgroundColor: "#F8F8F8",
    },
    phoneTextContainer: {
        borderRadius: 25,
        backgroundColor: "#F8F8F8",
    },

    cancelText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        marginTop: 25,
    },
});

export default SignUpScreen;
