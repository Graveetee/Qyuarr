import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function NumberScreen() {
    const [phone, setPhone] = useState("");
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let’s Get You Started</Text>
            <Text style={styles.subtitle}>Enter your phone number to proceed securely.</Text>

            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputRow}>
                <View style={styles.countryCode}>
                    <Text style={styles.codeText}>+234</Text>
                </View>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    placeholder="1234567890"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(auth)/otp")}
            >
                <Text style={styles.buttonText}>Continue</Text>
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
    title: { fontSize: 22, fontWeight: "700", marginBottom: 6 },
    subtitle: { color: "#555", marginBottom: 20 },
    label: { fontSize: 14, marginBottom: 8 },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        marginBottom: 30,
        overflow: "hidden",
    },
    countryCode: { backgroundColor: "#f9f9f9", padding: 10, justifyContent: "center", alignItems: "center" },
    codeText: { fontWeight: "500" },
    input: { flex: 1, padding: 12 },
    button: { backgroundColor: "#007BFF", paddingVertical: 14, borderRadius: 6 },
    buttonText: { color: "#fff", fontWeight: "600", textAlign: "center" },
});
