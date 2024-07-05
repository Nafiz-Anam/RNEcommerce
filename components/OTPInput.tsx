import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface OTPInputProps {
    onChangeOTP: (text: string, index: number) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ onChangeOTP }) => {
    const firstInput = useRef<TextInput>(null);
    const secondInput = useRef<TextInput>(null);
    const thirdInput = useRef<TextInput>(null);
    const fourthInput = useRef<TextInput>(null);

    return (
        <View style={styles.otpContainer}>
            <TextInput
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={(text) => {
                    if (text) {
                        secondInput.current?.focus();
                    }
                    onChangeOTP(text, 0);
                }}
            />
            <TextInput
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={(text) => {
                    if (text) {
                        thirdInput.current?.focus();
                    }
                    onChangeOTP(text, 1);
                }}
            />
            <TextInput
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={(text) => {
                    if (text) {
                        fourthInput.current?.focus();
                    }
                    onChangeOTP(text, 2);
                }}
            />
            <TextInput
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={(text) => {
                    onChangeOTP(text, 3);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        gap: 5,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 0,
        borderRadius: 10,
        textAlign: "center",
        fontSize: 24,
        backgroundColor: "#F8F8F8",
    },
});

export default OTPInput;
