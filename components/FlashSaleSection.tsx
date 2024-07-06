import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import FlashSaleItem from "./FlashSaleItem";

const flashSaleItems = [
    { image: require("@/assets/images/Placeholder_02.png"), discount: "-20%" },
    { image: require("@/assets/images/Placeholder_02.png"), discount: "-30%" },
    { image: require("@/assets/images/Placeholder_02.png"), discount: "-10%" },
    { image: require("@/assets/images/Placeholder_02.png"), discount: "-50%" },
    { image: require("@/assets/images/Placeholder_02.png"), discount: "-25%" },
    { image: require("@/assets/images/Placeholder_02.png"), discount: "-20%" },
];

const FlashSaleSection: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Flash Sale</Text>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>00</Text>
                    <Text style={styles.timerText}>36</Text>
                    <Text style={styles.timerText}>58</Text>
                </View>
            </View>
            <FlatList
                data={flashSaleItems}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <FlashSaleItem
                            image={item.image}
                            discount={item.discount}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
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
    timer: {
        flexDirection: "row",
        alignItems: "center",
    },
    timerText: {
        color: "#FF3D71",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 5,
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

export default FlashSaleSection;
