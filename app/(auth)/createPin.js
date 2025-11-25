import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function CreateAndConfirmPin() {
    const router = useRouter();

    const [pin, setPin] = useState(["", "", "", ""]);
    const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
    const [showPin, setShowPin] = useState(false);
    const [mismatch, setMismatch] = useState(false);

    const pinRefs = useRef([]);
    const confirmPinRefs = useRef([]);

    useEffect(() => {
        const pinString = pin.join("");
        const confirmString = confirmPin.join("");
        setMismatch(confirmString.length === 4 && pinString !== confirmString);
    }, [pin, confirmPin]);

    const handlePinChange = (text, index) => {
        const copy = [...pin];
        copy[index] = text;
        setPin(copy);

        if (text && index < 3) {
            pinRefs.current[index + 1].focus();
        }
    };

    const handlePinKeyPress = (e, index, type) => {
        if (e.nativeEvent.key === "Backspace") {
            if (type === "pin") {
                if (pin[index] === "" && index > 0) pinRefs.current[index - 1].focus();
            } else {
                if (confirmPin[index] === "" && index > 0) confirmPinRefs.current[index - 1].focus();
            }
        }
    };

    const handleConfirmChange = (text, index) => {
        const copy = [...confirmPin];
        copy[index] = text;
        setConfirmPin(copy);

        if (text && index < 3) {
            confirmPinRefs.current[index + 1].focus();
        }
    };

    const handleContinue = () => {
        const pinString = pin.join("");
        const confirmString = confirmPin.join("");

        if (pinString.length < 4 || confirmString.length < 4) {
            alert("Please complete both PINs.");
            return;
        }

        if (pinString !== confirmString) {
            alert("PINs do not match. Please try again.");
            return;
        }

        router.push("/(auth)/accountQRCode");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set Your Transaction PIN</Text>

            <Text style={styles.subtitle}>Enter a 4-digit PIN</Text>
            <View style={styles.pinRow}>
                {pin.map((p, i) => (
                    <TextInput
                        key={i}
                        ref={(ref) => (pinRefs.current[i] = ref)}
                        style={[styles.pinInput, mismatch && { borderColor: "red" }]}
                        keyboardType="numeric"
                        maxLength={1}
                        secureTextEntry={!showPin}
                        value={p}
                        onChangeText={(text) => handlePinChange(text, i)}
                        onKeyPress={(e) => handlePinKeyPress(e, i, "pin")}
                    />
                ))}
            </View>

            <Text style={styles.subtitle}>Confirm PIN</Text>
            <View style={styles.pinRow}>
                {confirmPin.map((p, i) => (
                    <TextInput
                        key={i}
                        ref={(ref) => (confirmPinRefs.current[i] = ref)}
                        style={[styles.pinInput, mismatch && { borderColor: "red" }]}
                        keyboardType="numeric"
                        maxLength={1}
                        secureTextEntry={!showPin}
                        value={p}
                        onChangeText={(text) => handleConfirmChange(text, i)}
                        onKeyPress={(e) => handlePinKeyPress(e, i, "confirm")}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.showPinButton} onPress={() => setShowPin(!showPin)}>
                <Icon name={showPin ? "eye-off-outline" : "eye-outline"} size={22} color="#007AFF" />
                <Text style={styles.showPinText}>{showPin ? "Hide PIN" : "Show PIN"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, mismatch && { backgroundColor: "#ccc" }]}
                onPress={() => {
                    const pinString = pin.join("");
                    const confirmString = confirmPin.join("");

                    if (pinString.length < 4 || confirmString.length < 4) {
                        alert("Please complete both PINs.");
                        return;
                    }

                    if (pinString !== confirmString) {
                        alert("PINs do not match. Please try again.");
                        return;
                    }

                    router.push("/(auth)/verifyIdentity"); // Updated navigation
                }}
                disabled={mismatch}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",
        justifyContent: "flex-start", // aligns content to the top
        paddingTop: 60, // space from top
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 25,
        textAlign: "center",
        color: "#007AFF"
    },
    subtitle: {
        color: "#666",
        marginBottom: 10,
        textAlign: "center",
        fontSize: 14,
    },
    pinRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    pinInput: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        textAlign: "center",
        fontSize: 16,
    },
    showPinButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    },
    showPinText: {
        color: "#007AFF",
        marginLeft: 8
    },
    button: {
        backgroundColor: "#0066FF",
        paddingVertical: 14,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center"
    },
});
