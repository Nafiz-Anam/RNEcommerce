import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const stories = [
    require("@/assets/images/story1.png"),
    require("@/assets/images/story1.png"),
    require("@/assets/images/story1.png"),
    require("@/assets/images/story1.png"),
];

const Stories = () => {
    return (
        <View>
            <Text style={styles.title}>Stories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {stories.map((image, index) => (
                    <View
                        key={index}
                        style={[
                            index === 0
                                ? styles.firstLogoWrapper
                                : styles.defaultLogoWrapper,
                        ]}
                    >
                        <Image source={image} style={styles.image} />
                        {index === 0 && (
                            <View style={styles.liveBadge}>
                                <Text style={styles.liveText}>Live</Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 10,
        marginLeft: 15,
    },
    image: {
        width: 120,
        height: 220,
        borderRadius: 10,
    },
    liveBadge: {
        position: "absolute",
        top: 15,
        left: 10,
        backgroundColor: "#FF0000",
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    liveText: {
        color: "white",
        fontSize: 12,
        fontWeight: "700",
    },
    firstLogoWrapper: {
        marginLeft: 15,
        marginRight: 5,
    },
    defaultLogoWrapper: {
        marginHorizontal: 5,
    },
});

export default Stories;
