import React, { useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    ViewToken,
    ImageBackground,
} from "react-native";

const Banner: React.FC = () => {
    const banners = [
        {
            image: require("@/assets/images/banner01.png"),
            title: "Big Sale",
            subtitle: "Up to 50%",
            description: "Happening Now",
        },
        {
            image: require("@/assets/images/banner01.png"),
            title: "New Arrivals",
            subtitle: "Up to 30%",
            description: "Check it out",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    }).current;

    const onViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: ViewToken[] }) => {
            if (viewableItems.length > 0) {
                setCurrentIndex(viewableItems[0].index ?? 0);
            }
        }
    ).current;

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.bannerContainer}>
                <ImageBackground
                    source={require("@/assets/images/banner01.png")}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />
                <View style={{ padding: 25 }}>
                    <View>
                        <Text style={styles.bannerTitle}>{item.title}</Text>
                        <Text style={styles.bannerSubtitle}>
                            {item.subtitle}
                        </Text>
                    </View>
                    <Text style={styles.bannerDescription}>
                        {item.description}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={banners}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={(_, index) => index.toString()}
            />
            <View style={styles.pagination}>
                {banners.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: currentIndex === index ? 1 : 0.5 },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 10,
    },
    bannerContainer: {
        width: Dimensions.get("window").width * 0.9,
        height: 157,
        marginHorizontal: Dimensions.get("window").width * 0.05,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "105%",
        position: "absolute",
        top: 0,
    },
    bannerImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    bannerTitle: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
    },
    bannerSubtitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "500",
    },
    bannerDescription: {
        width: "30%",
        fontSize: 16,
        color: "#fff",
        fontWeight: "500",
        marginTop: 15,
    },
    pagination: {
        flexDirection: "row",
        position: "absolute",
        bottom: -25,
    },
    dot: {
        height: 10,
        width: 10,
        backgroundColor: "#0042E0",
        borderRadius: 5,
        margin: 8,
    },
});

export default Banner;
