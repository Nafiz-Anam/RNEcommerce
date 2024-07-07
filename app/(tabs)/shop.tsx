import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShopHeader from "@/components/shopHeader";
import Banner from "@/components/banner";
import Categories from "@/components/CategorySection";

import TopProductsSection from "@/components/TopProductsSection";
import NewItems from "@/components/newItem";
import FlashSaleSection from "@/components/FlashSaleSection";
import MostPopular from "@/components/popular";
import JustForYouSection from "@/components/JustForYouSection";

const Shop: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <ShopHeader />
                <Banner />
                <Categories />
                <TopProductsSection />
                <NewItems />
                <FlashSaleSection />
                <MostPopular />
                <JustForYouSection />
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
