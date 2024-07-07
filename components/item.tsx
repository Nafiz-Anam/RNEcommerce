import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ItemProps = {
    image: any;
    description: string;
    price?: string;
    heart?: string;
    tag?: string;
};

const Item: React.FC<ItemProps> = ({
    image,
    description,
    price,
    heart,
    tag,
}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.imgContainer}>
                <Image source={image} style={styles.image} />
            </View> 

            <Text style={styles.description}>{description}</Text>
            {price && <Text style={styles.price}>{price}</Text>}
            {heart && <Text style={styles.price}>{heart} ❤</Text>}
            {tag && <Text style={styles.tag}>{tag}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        padding: 8,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    itemContainer: {
        margin: 8,
        width: 160,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 5,
    },
    description: {
        fontSize: 16,
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "700",
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
