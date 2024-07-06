import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TopProductItem from "./TopProductItem";

const topProducts = [
    { image: require("@/assets/images/Placeholder_03.png") },
    { image: require("@/assets/images/Placeholder_03.png") },
    { image: require("@/assets/images/Placeholder_03.png") },
    { image: require("@/assets/images/Placeholder_03.png") },
    { image: require("@/assets/images/Placeholder_03.png") },
];

const TopProductsSection: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Products</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {topProducts.map((item, index) => (
                    <TopProductItem key={index} image={item.image} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
});

export default TopProductsSection;
