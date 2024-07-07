import React from "react";
import { FlatList, StyleSheet } from "react-native";
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
    const sections = [
        { id: "ShopHeader", component: <ShopHeader /> },
        { id: "Banner", component: <Banner /> },
        { id: "categories", component: <Categories /> },
        { id: "topProductsSection", component: <TopProductsSection /> },
        { id: "newItems", component: <NewItems /> },
        { id: "flashSaleSection", component: <FlashSaleSection /> },
        { id: "mostPopular", component: <MostPopular /> },
        { id: "justForYouSection", component: <JustForYouSection /> },
    ];
    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
            <FlatList
                data={sections}
                renderItem={({ item }) => item.component}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
});

export default Shop;
