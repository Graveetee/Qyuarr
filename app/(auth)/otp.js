import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";

export default function OTPScreen() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const router = useRouter();
    const inputsRef = useRef([]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text.replace(/[^0-9]/g, ""); // allow only digits
        setOtp(newOtp);

        if (text && index < otp.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Code</Text>
            <Text style={styles.subtitle}>Enter the 4-digit code sent to your phone</Text>

            <View style={styles.otpRow}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputsRef.current[index] = ref)}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={value}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                ))}
            </View>

            <Text style={styles.resendText}>
                Didn’t receive a code? <Text style={styles.resendLink}>Resend Code</Text>
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(auth)/success")}
            >
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingTop: 80,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 6
    },
    subtitle: {
        color: "#555",
        marginBottom: 30
    },
    otpRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    otpInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        width: 55,
        height: 55,
        textAlign: "center",
        fontSize: 20,
    },
    resendText: {
        textAlign: "center",
        color: "#555",
        marginBottom: 20
    },
    resendLink: {
        color: "#007BFF",
        fontWeight: "250"
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        borderRadius: 6
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center"
    },
});
