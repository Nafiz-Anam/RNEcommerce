import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type AnnouncementProps = {
    title: string;
    text: string;
    buttonImage: any;
};

const Announcement: React.FC<AnnouncementProps> = ({
    title,
    text,
    buttonImage,
}) => {
    return (
        <View style={styles.announcementContainer}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.announcementText}>{text}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image
                        source={buttonImage}
                        style={styles.btnLogo}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    announcementContainer: {
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginHorizontal: 15,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 5,
    },
    announcementText: {
        fontSize: 16,
    },
    btnLogo: { width: 40, height: 40 },
});

export default Announcement;
