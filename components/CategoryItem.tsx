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
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 8,
        flex: 1,
        aspectRatio: 0.8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 2,
        paddingBottom: 50,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        marginBottom: 5,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginVertical: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
    },
    count: {
        fontSize: 18,
        fontWeight: "700",
        backgroundColor: "#DFE9FF",
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderRadius: 50,
    },
});

export default CategoryItem;
