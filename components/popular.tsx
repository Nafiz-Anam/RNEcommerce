import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Item from "./item";

const mostPopular = [
    {
        image: require("@/assets/images/Placeholder_01.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        heart: "1780",
        tag: "New",
    },
    {
        image: require("@/assets/images/Placeholder_01.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        heart: "1780",
        tag: "Sale",
    },
    {
        image: require("@/assets/images/Placeholder_01.png"),
        description: "Lorem ipsum dolor sit amet consectetur.",
        heart: "1780",
        tag: "Hot",
    },
];

const MostPopular: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Most Popular</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {mostPopular.map((item, index) => (
                    <Item
                        key={index}
                        image={item.image}
                        description={item.description}
                        heart={item.heart}
                        tag={item.tag}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
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

export default MostPopular;
