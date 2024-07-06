import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ItemProps = {
    image: any;
    description: string;
    price: string;
    tag?: string;
};

const Item: React.FC<ItemProps> = ({ image, description, price, tag }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={image} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
            {tag && <Text style={styles.tag}>{tag}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        width: 150,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
    },
    tag: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "blue",
        color: "white",
        paddingHorizontal: 5,
        borderRadius: 5,
        fontSize: 12,
    },
});

export default Item;
