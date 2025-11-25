import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function VerifyIdentity() {
    const router = useRouter();
    const [type, setType] = useState("BVN");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Your Identity</Text>
            <Text style={styles.subtitle}>
                Enter your BVN or NIN to verify your identity.
            </Text>

            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setType(type === "BVN" ? "NIN" : "BVN")}
            >
                <Text>{type}</Text>
                <Text style={styles.arrow}>⌄</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder={
                    type === "BVN" ? "Enter your 11-digit BVN" : "Enter your NIN"
                }
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(auth)/generateQR")}
            >
                <Text style={styles.buttonText}>Continue</Text>
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
        marginBottom: 25,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    arrow: {
        fontSize: 14,
        color: "#666",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 14,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginBottom: 35,
    },
    button: {
        backgroundColor: "#0066FF",
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
    },
});
