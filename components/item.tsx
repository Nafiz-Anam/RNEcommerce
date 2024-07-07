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
                {tag && (
                    <View style={styles.tagContainer}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                )}
            </View>

            <Text style={styles.description}>{description}</Text>
            {price && <Text style={styles.price}>{price}</Text>}
            {heart && <Text style={styles.price}>{heart} ❤</Text>}
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
        elevation: 5,
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
    tagContainer: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "blue",
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    tagText: {
        color: "white",
        fontSize: 12,
    },
});

export default Item;
