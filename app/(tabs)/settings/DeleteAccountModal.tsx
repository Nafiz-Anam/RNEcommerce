import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";

type DeleteAccountModalProps = {
    isVisible: boolean;
    onClose: () => void;
    onDelete: () => void;
};

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
    isVisible,
    onClose,
    onDelete,
}) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} useNativeDriver>
            <View style={styles.modalContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("@/assets/images/warning.png")}
                        style={styles.warningIcon}
                    />
                </View>
                <Text style={styles.title}>
                    You are going to delete your account
                </Text>
                <Text style={styles.subtitle}>
                    You won't be able to restore your data
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={onClose}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={onDelete}
                    >
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        padding: 15,
        aspectRatio: 1,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -70,
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 90,
        alignItems: "center",
        position: "relative",
    },
    warningIcon: {
        width: 120,
        height: 120,
    },
    title: {
        width: "80%",
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "500",
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    cancelButton: {
        backgroundColor: "#202020",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 10,
        flex: 1,
    },
    deleteButton: {
        backgroundColor: "#D97474",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10,
        flex: 1,
    },
    cancelButtonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "300",
        fontSize: 24,
    },
    deleteButtonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "300",
        fontSize: 24,
    },
});

export default DeleteAccountModal;
