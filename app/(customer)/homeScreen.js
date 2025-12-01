import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CustomerHome() {
    const router = useRouter();
    const [hidden, setHidden] = useState(false);

    const transactions = [
        {
            id: 1,
            title: "Transfer to Kuruna Joseph",
            amount: "₦30,000",
            time: "03-10-2025   4:05 pm",
            icon: "lock-closed-outline",
        },
        {
            id: 2,
            title: "Transfer from Hameed Yakubu",
            amount: "₦30,000",
            time: "03-10-2025   4:05 pm",
            icon: "lock-closed-outline",
        },
        {
            id: 3,
            title: "Scan to pay Habeeb Salisu",
            amount: "₦30,000",
            time: "03-10-2025   4:05 pm",
            icon: "lock-closed-outline",
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* HEADER */}
                <View style={styles.header}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/100" }}
                        style={styles.avatar}
                    />
                    <Text style={styles.hello}>Hello, John</Text>
                    <View style={styles.headerIcons}>
                        <Ionicons name="notifications-outline" size={22} color="#000" />
                        <Ionicons name="alert-circle-outline" size={22} color="#000" />
                    </View>
                </View>

                {/* BALANCE CARD */}
                <View style={styles.balanceCard}>
                    <View>
                        <Text style={styles.balanceTitle}>Available Balance</Text>

                        <View style={styles.balanceRow}>
                            <Text style={styles.balanceAmount}>
                                {hidden ? "•••••" : "₦257,324.00"}
                            </Text>
                            <TouchableOpacity onPress={() => setHidden(!hidden)}>
                                <Ionicons
                                    name={hidden ? "eye-off-outline" : "eye-outline"}
                                    size={22}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.addMoneyBtn}>
                        <Ionicons name="add" size={16} color="#fff" />
                        <Text style={styles.addMoneyText}>Add Money</Text>
                    </TouchableOpacity>
                </View>

                {/* ACTION BUTTONS */}
                <View style={styles.actionRow}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => router.push("/(customer)/cardScreen")}
                    >
                        <Ionicons name="qr-code-outline" size={24} color="#0066FF" />
                        <Text style={styles.actionText}>QR Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => router.push("/(customer)/scanToPay")}
                    >
                        <Ionicons name="scan-outline" size={24} color="#0066FF" />
                        <Text style={styles.actionText}>Scan to Pay</Text>
                    </TouchableOpacity>
                </View>

                {/* TRANSACTION HEADER */}
                <View style={styles.transactionHeader}>
                    <Text style={styles.transactionTitle}>Transaction History</Text>
                    <TouchableOpacity
                        onPress={() => router.push("/(customer)/transactionHistory")}
                    >
                        <Ionicons name="chevron-forward" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* TRANSACTIONS */}
                {transactions.map((tx) => (
                    <View key={tx.id} style={styles.transactionCard}>
                        <Ionicons name={tx.icon} size={20} color="#0066FF" />
                        <View style={styles.transactionInfo}>
                            <Text style={styles.txTitle}>{tx.title}</Text>
                            <Text style={styles.txTime}>{tx.time}</Text>
                        </View>
                        <Text style={styles.txAmount}>{tx.amount}</Text>
                    </View>
                ))}

            </ScrollView>

            {/* BOTTOM TABS */}
            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.tabItem}>
                    <Ionicons name="home" size={22} color="#0066FF" />
                    <Text style={[styles.tabLabel, { color: "#0066FF" }]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => router.push("/(customer)/transactionHistory")}
                >
                    <Ionicons name="time-outline" size={22} color="#666" />
                    <Text style={styles.tabLabel}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => router.push("/(customer)/profile")}
                >
                    <Ionicons name="person-outline" size={22} color="#666" />
                    <Text style={styles.tabLabel}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 55,
    },
    avatar: { width: 40, height: 40, borderRadius: 50, marginRight: 10 },
    hello: { fontSize: 14, color: "#222", flex: 1 },
    headerIcons: { flexDirection: "row", gap: 18 },

    balanceCard: {
        backgroundColor: "#0066FF",
        marginTop: 20,
        padding: 20,
        borderRadius: 14,
    },
    balanceTitle: { color: "#fff", fontSize: 12, marginBottom: 10 },
    balanceRow: { flexDirection: "row", alignItems: "center", gap: 10 },
    balanceAmount: { fontSize: 20, color: "#fff", fontWeight: "700" },

    addMoneyBtn: {
        backgroundColor: "rgba(255,255,255,0.15)",
        flexDirection: "row",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignSelf: "flex-start",
        marginTop: 15,
        alignItems: "center",
    },
    addMoneyText: { color: "#fff", marginLeft: 5, fontSize: 12 },

    actionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 25,
    },
    actionButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#DADADA",
        paddingVertical: 22,
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: 5,
    },
    actionText: { marginTop: 6, fontSize: 12, color: "#333" },

    transactionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    transactionTitle: { fontWeight: "600", fontSize: 14 },

    transactionCard: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        backgroundColor: "#F9F9F9",
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 10,
    },
    transactionInfo: { flex: 1, marginLeft: 10 },
    txTitle: { fontSize: 13, color: "#333" },
    txTime: { fontSize: 10, color: "#888", marginTop: 4 },
    txAmount: { fontWeight: "600", fontSize: 13, color: "#000" },

    bottomTabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: "#eee",
        paddingHorizontal: 25,
    },
    tabItem: { alignItems: "center" },
    tabLabel: { fontSize: 11, marginTop: 3, color: "#666" },
});