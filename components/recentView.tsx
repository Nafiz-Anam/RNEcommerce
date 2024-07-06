import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const recentlyViewed = [
    require("@/assets/images/profile.png"),
    require("@/assets/images/profile.png"),
    require("@/assets/images/profile.png"),
    require("@/assets/images/profile.png"),
    require("@/assets/images/profile.png"),
];

const RecentlyViewed = () => {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={styles.title}>Recently viewed</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recentlyViewed.map((image, index) => (
                    <View
                        key={index}
                        style={[
                            styles.logoWrapper,
                            index === 0
                                ? styles.firstLogoWrapper
                                : styles.defaultLogoWrapper,
                        ]}
                    >
                        <View style={styles.logoContainer}>
                            <Image source={image} style={styles.image} />
                        </View>
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
    logoWrapper: {
        marginVertical: 10,
    },
    firstLogoWrapper: {
        marginLeft: 15,
        marginRight: 5,
    },
    defaultLogoWrapper: {
        marginHorizontal: 5,
    },
    logoContainer: {
        padding: 5,
        aspectRatio: 1,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});

export default RecentlyViewed;
