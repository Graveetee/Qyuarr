import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function setUpAccountScreen() {
  const router = useRouter();
  const inputsRef = useRef([]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Set Up Your Account</Text>
      <Text style={styles.subtext}>
        Get started with a quick, secure account setup
      </Text>

      {/* FIRST NAME */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          ref={(ref) => (inputsRef.current[0] = ref)}
          style={styles.input}
          placeholder="e.g John"
          placeholderTextColor="#9A9A9A"
          returnKeyType="next"
          onSubmitEditing={() => inputsRef.current[1].focus()}
        />
      </View>

      {/* LAST NAME */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          ref={(ref) => (inputsRef.current[1] = ref)}
          style={styles.input}
          placeholder="e.g Doe"
          placeholderTextColor="#9A9A9A"
          returnKeyType="next"
          onSubmitEditing={() => inputsRef.current[2].focus()}
        />
      </View>

      {/* STATE OF RESIDENCE */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>State of Residence</Text>
        <TextInput
          ref={(ref) => (inputsRef.current[2] = ref)}
          style={styles.input}
          placeholder="e.g Kano"
          placeholderTextColor="#9A9A9A"
          returnKeyType="next"
          onSubmitEditing={() => inputsRef.current[3].focus()}
        />
      </View>

      {/* REFERRAL CODE */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Referral Code (Optional)</Text>
        <TextInput
          ref={(ref) => (inputsRef.current[3] = ref)}
          style={styles.input}
          placeholder="e.g ABC123"
          placeholderTextColor="#9A9A9A"
          returnKeyType="done"
          onSubmitEditing={() => router.push("/(auth)/createPin")}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/createPin")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtext: {
    color: "#6B6B6B",
    fontSize: 12,
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 6,
    color: "#353535",
  },
  input: {
    height: 42,
    width: "100%",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#0066FF",
    height: 46,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
