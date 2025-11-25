import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function generateQR() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Ionicons name="checkmark-circle-outline" size={80} color="green" />
                <Text style={styles.title}>Congratulations!</Text>
                <Text style={styles.subtitle}>Your phone number has been verified</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(auth)/accountQRCodeScreen")}
            >
                <Text style={styles.buttonText}>Generate QR Code</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    card: {
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 16,
        paddingVertical: 50,
        paddingHorizontal: 20,
        marginBottom: 40,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
        marginTop: 15,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 15,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});
