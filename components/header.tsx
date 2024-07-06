import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require("@/assets/images/profile.png")}
                        style={styles.profileImage}
                    />
                </View>
                <TouchableOpacity style={styles.activityButton}>
                    <Text style={styles.activityText}>My Activity</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        source={require("@/assets/images/Vouchers.png")}
                        style={styles.iconImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("@/assets/images/TopMenu.png")}
                        style={styles.iconImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("@/assets/images/Settings.png")}
                        style={styles.iconImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    logoContainer: {
        padding: 5,
        aspectRatio: 1,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    activityButton: {
        backgroundColor: "#004CFF",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    activityText: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 10,
    },
    iconImage: {
        width: 45,
        height: 45,
    },
});

export default Header;
