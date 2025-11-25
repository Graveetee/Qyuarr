import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="number" />
            <Stack.Screen name="otp" />
            <Stack.Screen name="success" />
            <Stack.Screen name="pickUserType" />
            <Stack.Screen name="setUpAccountScreen" />
            <Stack.Screen name="createPin" />
            {/* <Stack.Screen name="confirmPin" /> */}
            <Stack.Screen name="verifyIdentity" />
            <Stack.Screen name="generateQR" />
            <Stack.Screen name="accountQRCodeScreen" />
        </Stack>
    );
}
