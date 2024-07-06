import React, { useState, useRef } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    ListRenderItem,
    ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type SlideData = {
    title: string;
    text: string;
    image: any;
    button?: boolean;
};

const data: SlideData[] = [
    {
        title: "Hello",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.",
        image: require("@/assets/images/slide1.png"),
    },
    {
        title: "Ready?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: require("@/assets/images/slide2.png"),
        button: true,
    },
];

const renderItem: ListRenderItem<SlideData> = ({ item }) => {
    return (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 25,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
                {item.button && (
                    <CustomButton
                        title="Let's Start"
                        handlePress={() => router.push("/home")}
                        isLoading={false}
                    />
                )}
            </View>
        </View>
    );
};

const SliderScreen: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList<SlideData>>(null);

    const handleViewableItemsChanged = ({
        viewableItems,
    }: {
        viewableItems: any;
    }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <ImageBackground
                    source={require("@/assets/images/Bubbles5.png")}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={handleViewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                    ref={flatListRef}
                    contentContainerStyle={styles.flatListContent}
                />
                <View style={styles.pagination}>
                    {data.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                activeIndex === index
                                    ? styles.activeDot
                                    : styles.inactiveDot,
                            ]}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SliderScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
    },
    flatListContent: {
        alignItems: "center",
    },
    slide: {
        backgroundColor: "white",
        borderRadius: 20,
        height: screenHeight * 0.75,
        width: screenWidth * 0.8,
        marginHorizontal: screenWidth * 0.1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: screenWidth * 0.8,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "300",
        marginBottom: 20,
        textAlign: "center",
        lineHeight: 30,
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 50,
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginHorizontal: 6,
    },
    activeDot: {
        backgroundColor: "#004CFF",
    },
    inactiveDot: {
        backgroundColor: "#C4C4C4",
    },
});
