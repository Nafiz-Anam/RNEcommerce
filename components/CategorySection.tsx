import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import CategoryItem from "./CategoryItem";

const categories = [
    {
        image: require("@/assets/images/Placeholder_02.png"),
        title: "Clothing",
        count: 109,
    },
    {
        image: require("@/assets/images/Placeholder_02.png"),
        title: "Shoes",
        count: 530,
    },
    {
        image: require("@/assets/images/Placeholder_02.png"),
        title: "Bags",
        count: 87,
    },
    {
        image: require("@/assets/images/Placeholder_02.png"),
        title: "Lingerie",
        count: 218,
    },
];

const Categories: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <CategoryItem
                            image={item.image}
                            title={item.title}
                            count={item.count}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.title}
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
    row: {
        flex: 1,
        justifyContent: "space-between",
    },
    item: {
        flex: 1,
        margin: 5,
    },
});

export default Categories;
