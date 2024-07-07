import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import Announcement from "./Announcement";

const announcements = [
    {
        title: "Announcement 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.",
        buttonImage: require("@/assets/images/Button.png"),
    },
    {
        title: "Announcement 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.",
        buttonImage: require("@/assets/images/Button.png"),
    },
    {
        title: "Announcement 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.",
        buttonImage: require("@/assets/images/Button.png"),
    },
];

const screenWidth = Dimensions.get("window").width;

const AnnouncementSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const renderDots = () => {
        return (
            <View style={styles.dotContainer}>
                {announcements.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: index === currentIndex ? 1 : 0.3 },
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={announcements}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Announcement
                            title={item.title}
                            text={item.text}
                            buttonImage={item.buttonImage}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                contentContainerStyle={styles.flatListContent}
            />
            {renderDots()}
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    flatListContent: {
        paddingTop: 10,
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 25,
        backgroundColor: "#004CFF",
        marginHorizontal: 4,
    },
});

export default AnnouncementSlider;
