import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/header";
import Greeting from "@/components/greetings";
import Announcement from "@/components/Announcement";
import RecentlyViewed from "@/components/recentView";
import MyOrders from "@/components/myOrders";
import Stories from "@/components/stories";
import NewItems from "@/components/newItem";
import MostPopular from "@/components/popular";
import Categories from "@/components/CategorySection";
import FlashSaleSection from "@/components/FlashSaleSection";
import JustForYouSection from "@/components/JustForYouSection";
import TopProductsSection from "@/components/TopProductsSection";

const Profile = () => {
    const sections = [
        { id: "header", component: <Header /> },
        { id: "greeting", component: <Greeting /> },
        { id: "announcement", component: <Announcement /> },
        { id: "recentlyViewed", component: <RecentlyViewed /> },
        { id: "myOrders", component: <MyOrders /> },
        { id: "stories", component: <Stories /> },
        { id: "newItems", component: <NewItems /> },
        { id: "mostPopular", component: <MostPopular /> },
        { id: "categories", component: <Categories /> },
        { id: "flashSaleSection", component: <FlashSaleSection /> },
        { id: "topProductsSection", component: <TopProductsSection /> },
        { id: "justForYouSection", component: <JustForYouSection /> },
    ];
    return (
        <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
            <FlatList
                data={sections}
                renderItem={({ item }) => item.component}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default Profile;
