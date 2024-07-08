import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const languages = ["$ USD", "€ EURO", "₫ VND", "¥ RMB"];

const CurrencySelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("$ USD");
    const router = useRouter();

    const handleSelectLanguage = (language: string) => {
        setSelectedLanguage(language);
        // You might want to implement language change logic here
        // router.back();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Settings</Text>
                <Text style={styles.subHeader}>Currency</Text>
                <FlatList
                    data={languages}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.languageItem,
                                item === selectedLanguage &&
                                    styles.selectedLanguageItem,
                            ]}
                            onPress={() => handleSelectLanguage(item)}
                        >
                            <Text
                                style={[
                                    styles.languageText,
                                    item === selectedLanguage &&
                                        styles.selectedLanguageText,
                                ]}
                            >
                                {item}
                            </Text>
                            {item === selectedLanguage ? (
                                <View style={styles.checkMark}>
                                    <Image
                                        source={require("@/assets/images/Check.png")}
                                        style={styles.checkIcon}
                                    />
                                </View>
                            ) : (
                                <View style={styles.checkMark}>
                                    <Image
                                        source={require("@/assets/images/CheckEmpty.png")}
                                        style={styles.checkIcon}
                                    />
                                </View>
                            )}
                        </TouchableOpacity>
                    )}
                />
            </View>
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
    checkMark: {
        position: "absolute",
        right: 20,
    },
    checkIcon: {
        width: 30,
        height: 30,
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
    languageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 52,
        borderWidth: 0,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: "#F9F9F9",
    },
    selectedLanguageItem: {
        backgroundColor: "#E6F0FF",
        borderColor: "#004CFF",
    },
    languageText: {
        fontSize: 20,
        fontWeight: "500",
    },
    selectedLanguageText: {
        color: "#004CFF",
    },
});

export default CurrencySelector;
