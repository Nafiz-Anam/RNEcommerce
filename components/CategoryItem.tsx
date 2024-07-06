import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type CategoryItemProps = {
    image: any;
    title: string;
    count: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ image, title, count }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
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
    textContainer: {
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    count: {
        fontSize: 14,
        color: "#888",
    },
});

export default CategoryItem;
