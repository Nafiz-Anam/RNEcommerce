import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import JustForYouItem from "./JustForYouItem";

const justForYouItems = [
    {
        image: require("@/assets/images/foru1.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
    {
        image: require("@/assets/images/foru2.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
    {
        image: require("@/assets/images/Placeholder_02.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
    {
        image: require("@/assets/images/foru3.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
    {
        image: require("@/assets/images/flash01.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
    {
        image: require("@/assets/images/popular1.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
];

const JustForYouSection: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Just For You</Text>
                <Text style={styles.star}> ★</Text>
            </View>
            <FlatList
                data={justForYouItems}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <JustForYouItem
                            image={item.image}
                            description={item.description}
                            price={item.price}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    star: {
        color: "#004CFF",
        fontSize: 20,
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
    },
    item: {
        flex: 1,
        margin: 5,
    },
});

export default JustForYouSection;
