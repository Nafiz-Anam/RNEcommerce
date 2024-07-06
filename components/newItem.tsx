import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Item from "./item";

const newItems = [
    {
        image: require("@/assets/images/item.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$17,00",
    },
    {
        image: require("@/assets/images/item.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$32,00",
    },
    {
        image: require("@/assets/images/item.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        price: "$21,00",
    },
];

const NewItems: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Items</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {newItems.map((item, index) => (
                    <Item
                        key={index}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    seeAll: {
        color: "#004CFF",
        fontSize: 16,
    },
});

export default NewItems;
