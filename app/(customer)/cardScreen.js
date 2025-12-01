import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QRCardScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>

                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={22} color="#000" />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>QR Card</Text>

                    {/* Placeholder to balance spacing */}
                    <View style={{ width: 22 }} />
                </View>

                {/* QR CARD IMAGE */}
                <View style={styles.cardBox}>
                    <Image
                        source={{
                            uri: "https://marketplace.canva.com/EAFu4GRxQCs/1/0/1600w/canva-black-white-simple-light-food-qr-code-business-card-79v40Y-YnOQ.jpg"
                        }}
                        style={styles.cardImage}
                        resizeMode="cover"
                    />
                </View>

                {/* QUICK ACTION GRID */}
                <View style={styles.gridBox}>
                    <TouchableOpacity style={styles.gridItem}>
                        <Ionicons name="information-circle-outline" size={26} color="#007AFF" />
                        <Text style={styles.gridText}>Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem}>
                        <Ionicons name="list-outline" size={26} color="#007AFF" />
                        <Text style={styles.gridText}>Transactions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem}>
                        <Ionicons name="settings-outline" size={26} color="#007AFF" />
                        <Text style={styles.gridText}>Card Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem}>
                        <Ionicons name="flash-outline" size={26} color="#007AFF" />
                        <Text style={styles.gridText}>Manage Dispute</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem}>
                        <Ionicons name="qr-code-outline" size={26} color="#007AFF" />
                        <Text style={styles.gridText}>Order QR Card</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#F7F7F7",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,  // <- FIX
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "700",
    },
    cardBox: {
        marginTop: 25,
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    cardImage: {
        width: "100%",
        height: 170,
        borderRadius: 12,
    },
    gridBox: {
        marginTop: 25,
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    gridItem: {
        width: "30%",
        backgroundColor: "#F3F7FF",
        paddingVertical: 22,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 15,
    },
    gridText: {
        marginTop: 6,
        fontSize: 12,
        fontWeight: "500",
        color: "#333",
    },
});
