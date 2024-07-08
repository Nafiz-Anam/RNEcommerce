import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import countryData from "@/assets/static/country.json";
import { useCountry } from "@/context/CountryContext";

const CountrySelector = () => {
    const { setSelectedCountry } = useCountry();
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSelectCountry = (country: string) => {
        setSelectedCountry(country);
        router.back();
    };

    const filteredCountries = countryData.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const groupedCountries = filteredCountries.reduce((acc, country) => {
        const firstLetter = country.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(country.name);
        return acc;
    }, {} as { [key: string]: string[] });

    const sections = Object.keys(groupedCountries)
        .sort()
        .map((key) => ({
            title: key,
            data: groupedCountries[key],
        }));

    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Settings</Text>
                <Text style={styles.subHeader}>Country</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Country"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor="#0042E0"
                />

                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.countryItem}
                            onPress={() => handleSelectCountry(item)}
                        >
                            <Text style={styles.countryText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.sectionHeaderContainer}>
                            <Text style={styles.sectionHeader}>{title}</Text>
                        </View>
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
    header: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 15,
    },
    searchInput: {
        height: 52,
        borderWidth: 0,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#E5EBFC",
        color: "#0042E0",
    },
    sectionHeaderContainer: {
        backgroundColor: "#fff",
        paddingVertical: 5,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    countryItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    countryText: {
        fontSize: 16,
        color: "#000",
    },
    selectedCountryText: {
        fontWeight: "bold",
    },
    checkmark: {
        fontSize: 18,
        color: "#000",
    },
});

export default CountrySelector;
