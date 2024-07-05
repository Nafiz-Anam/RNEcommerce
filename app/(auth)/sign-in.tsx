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

const SignInScreen = () => {
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
                source={require("@/assets/images/Bubbles2.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >
                <View style={styles.container}>
                    <Text style={styles.header}>Login</Text>
                    <Text style={styles.subTitle}>Good to see you back!</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#999"
                    />

                    <CustomButton
                        title="Next"
                        handlePress={() => router.push("/otp")}
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
        height: "105%",
        position: "absolute",
        top: 0,
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
    },
    header: {
        fontSize: 50,
        fontWeight: "700",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "300",
        marginBottom: 20,
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
    cancelText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        marginTop: 25,
    },
});

export default SignInScreen;
