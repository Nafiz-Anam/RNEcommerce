import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/header";
import Greeting from "@/components/greetings";
import Announcement from "@/components/Announcement";
import RecentlyViewed from "@/components/recentView";
import MyOrders from "@/components/myOrders";
import Stories from "@/components/stories";

const screenHeight = Dimensions.get("window").height;

const Profile = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Header />
                <Greeting />
                <Announcement />
                <RecentlyViewed />
                <MyOrders />
                <Stories />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "red",
    },
    contentContainer: {
        minHeight: screenHeight,
        backgroundColor: "blue",
    },
});

export default Profile;
