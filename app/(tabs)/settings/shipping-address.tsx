import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useCountry } from "@/context/CountryContext"; // Adjust the path as needed

const ShippingAddress = () => {
    const { selectedCountry } = useCountry();
    const [country, setCountry] = useState("Choose your country");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (selectedCountry) {
            setCountry(selectedCountry);
        }
    }, [selectedCountry]);

    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <Text style={styles.header}>Settings</Text>
                <Text style={styles.subHeader}>Shipping Address</Text>

                <TouchableOpacity
                    onPress={() =>
                        router.push("/(tabs)/settings/country-selector")
                    }
                    style={styles.countrySelector}
                >
                    <View>
                        <Text style={styles.countryTitle}>Country</Text>
                        <Text style={styles.countryText}>{country}</Text>
                    </View>
                    <Image
                        source={require("@/assets/images/Button.png")}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    value={address}
                    onChangeText={setAddress}
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Town / City"
                    value={city}
                    onChangeText={setCity}
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Postcode"
                    value={postcode}
                    onChangeText={setPostcode}
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholderTextColor="#999"
                />

                <View style={styles.bottomPart}>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    profileImage: {
        width: 40,
        height: 40,
    },
    header: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 20,
    },
    countrySelector: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0,
        height: 52,
        marginTop: 20,
        marginBottom: 30,
    },
    countryTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 5,
    },
    countryText: {
        fontSize: 22,
        fontWeight: "600",
        color: "#004CFF",
    },
    arrow: {
        fontSize: 18,
        color: "#004CFF",
    },
    input: {
        height: 52,
        borderWidth: 0,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#F8F8F8",
    },
    bottomPart: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: "#004CFF",
        borderRadius: 25,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    saveButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
});

export default ShippingAddress;
