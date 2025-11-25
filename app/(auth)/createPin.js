import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CreatePin() {
    const router = useRouter();
    const [pin, setPin] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (text, index) => {
        const copy = [...pin];
        copy[index] = text.replace(/[^0-9]/g, ""); // only digits
        setPin(copy);

        if (text && index < pin.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === "Backspace" && !pin[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Your Transaction PIN</Text>
            <Text style={styles.subtitle}>
                Set a 4-digit PIN to secure your account and authorize transactions.
            </Text>

            <View style={styles.pinRow}>
                {pin.map((p, i) => (
                    <TextInput
                        key={i}
                        ref={(ref) => (inputsRef.current[i] = ref)}
                        style={styles.pinInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={p}
                        onChangeText={(text) => handleChange(text, i)}
                        onKeyPress={(e) => handleKeyPress(e, i)}
                    />
                ))}
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(auth)/confirmPin")}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 25,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
    },
    subtitle: {
        color: "#666",
        marginTop: 5,
        marginBottom: 35,
    },
    pinRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    pinInput: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        textAlign: "center",
        fontSize: 20,
    },
    button: {
        backgroundColor: "#0066FF",
        paddingVertical: 14,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
    },
});
