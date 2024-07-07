import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShopHeader from "@/components/shopHeader";
import Banner from "@/components/banner";
import Categories from "@/components/CategorySection";

import TopProductsSection from "@/components/TopProductsSection";

const Shop: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <ShopHeader />
                <Banner />
                <Categories />
                <TopProductsSection />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    contentContainer: {
        flexGrow: 1,
    },
});

export default Shop;
