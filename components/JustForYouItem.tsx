import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type JustForYouItemProps = {
    image: any;
    description: string;
    price: string;
};

const JustForYouItem: React.FC<JustForYouItemProps> = ({
    image,
    description,
    price,
}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        flex: 1,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
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
        width: "100%",
        height: "70%",
        borderRadius: 10,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
        textAlign: "center",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default JustForYouItem;
