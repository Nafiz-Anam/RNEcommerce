import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const itemMargin = 5;
const numColumns = 3;
const itemWidth = (screenWidth - (numColumns + 10) * itemMargin) / numColumns;

type FlashSaleItemProps = {
    image: any;
    discount: string;
};

const FlashSaleItem: React.FC<FlashSaleItemProps> = ({ image, discount }) => {
    return (
        <View
            style={[styles.container, { width: itemWidth, height: itemWidth }]}
        >
            <Image source={image} style={styles.image} />
            <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{discount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 8,
        margin: itemMargin,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    discountContainer: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#FF3D71",
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    discountText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
});

export default FlashSaleItem;
