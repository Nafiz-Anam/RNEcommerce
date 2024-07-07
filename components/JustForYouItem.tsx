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
            <View style={styles.imgContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
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
    container: {
        margin: 5,
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
});

export default JustForYouItem;
