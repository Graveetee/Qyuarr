import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function TransactionHistoryScreen() {
    const router = useRouter();

    const transactionsToday = [
        {
            id: 1,
            title: "Transfer to Kuruna Joseph",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "wallet-outline",
        },
        {
            id: 2,
            title: "Transfer from Hameed Yakubu",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "wallet-outline",
        },
        {
            id: 3,
            title: "Scan to pay Habeeb Salisu",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "qr-code-outline",
        },
        {
            id: 4,
            title: "Scan to pay Habeeb Salisu",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "qr-code-outline",
        },
    ];

    const transactionsYesterday = [
        {
            id: 5,
            title: "Scan to pay Habeeb Salisu",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "qr-code-outline",
        },
        {
            id: 6,
            title: "Transfer from Hameed Yakubu",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "wallet-outline",
        },
        {
            id: 7,
            title: "Scan to pay Habeeb Salisu",
            amount: "₦30,000",
            date: "03-10-2025",
            time: "4:05 pm",
            icon: "qr-code-outline",
        },
    ];

    const renderTransaction = (item) => (
        <View key={item.id} style={styles.transactionCard}>
            <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={18} color="#007AFF" />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.txnTitle}>{item.title}</Text>
                <Text style={styles.txnDate}>
                    {item.date}   •   {item.time}
                </Text>
            </View>

            <Text style={styles.amount}>{item.amount}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={22} color="#000" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Transaction History</Text>

                <TouchableOpacity>
                    <Ionicons name="search-outline" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* TODAY */}
                <Text style={styles.sectionLabel}>Today</Text>

                {transactionsToday.map(renderTransaction)}

                {/* YESTERDAY */}
                <Text style={[styles.sectionLabel, { marginTop: 20 }]}>Yesterday</Text>

                {transactionsYesterday.map(renderTransaction)}

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        paddingHorizontal: 20,
        paddingTop: 45,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "700",
    },

    sectionLabel: {
        fontSize: 14,
        marginBottom: 10,
        color: "#888",
        marginTop: 10,
    },

    transactionCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 14,
        marginBottom: 12,
    },

    iconBox: {
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: "#E9F1FF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    txnTitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#333",
    },

    txnDate: {
        fontSize: 11,
        color: "#888",
        marginTop: 2,
    },

    amount: {
        fontSize: 12,
        fontWeight: "600",
        color: "#007AFF",
    },
});
