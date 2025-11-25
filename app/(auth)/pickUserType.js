import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function pickUserType() {
    const [selected, setSelected] = useState(null);
    const router = useRouter();

    const options = [
        {
            id: "merchant",
            title: "Merchant",
            desc: "For businesses managing sales and transactions.",
        },
        {
            id: "customer",
            title: "Customers",
            desc: "For personal use and everyday payments.",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose How You’d Like to Get Started</Text>
            <Text style={styles.subtitle}>
                Select the type of account that best fits your needs. You can always
                switch later.
            </Text>

            {options.map((opt) => (
                <TouchableOpacity
                    key={opt.id}
                    style={[
                        styles.optionBox,
                        selected === opt.id && styles.selectedBox,
                    ]}
                    onPress={() => setSelected(opt.id)}
                >
                    <View>
                        <Text style={styles.optionTitle}>{opt.title}</Text>
                        <Text style={styles.optionDesc}>{opt.desc}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#000" />
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                style={[
                    styles.nextButton,
                    !selected && { opacity: 0.6 },
                ]}
                disabled={!selected}
                onPress={() => router.push("/(auth)/setUpAccountScreen")}
            >
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 25,
        paddingTop: 80,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
    subtitle: {
        color: "#666",
        marginVertical: 10,
        marginBottom: 25,
    },
    optionBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
    },
    selectedBox: {
        borderColor: "#007AFF",
        backgroundColor: "#f0f8ff",
    },
    optionTitle: {
        fontWeight: "600",
        fontSize: 16,
        color: "#000",
    },
    optionDesc: {
        color: "#666",
        fontSize: 13,
        marginTop: 4,
    },
    nextButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
    },
    nextText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});
