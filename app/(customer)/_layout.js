import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="homeScreen" />
            <Stack.Screen name="cardScreen" />
            <Stack.Screen name="transactionHistory" />

        </Stack>
    );
}
