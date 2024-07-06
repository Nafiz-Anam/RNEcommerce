import React from "react";
import { View, Image, StyleSheet } from "react-native";

type TopProductItemProps = {
    image: any;
};

const TopProductItem: React.FC<TopProductItemProps> = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 50,
        padding: 5,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 2,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});

export default TopProductItem;
