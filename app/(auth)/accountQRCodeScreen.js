import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const AccountQRCodeScreen = ({ navigation }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [qrKey, setQrKey] = useState(Date.now());

  useEffect(() => {
    generateAccountNumber();
  }, []);

  const generateAccountNumber = () => {
    // Randomly pick 40 or 43
    const prefix = Math.random() < 0.5 ? '40' : '43';
    // Generate remaining 8 digits
    const remaining = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
    const number = prefix + remaining;

    setAccountNumber(number);
    setQrKey(Date.now());
  };

  const proceedToHome = () => {
    navigation.navigate('Home'); // Replace 'Home' with your home screen name
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Account QR Code</Text>

      {accountNumber !== '' && (
        <Image
          key={qrKey}
          style={styles.qr}
          source={{
            uri: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${accountNumber}&color=007AFF&_=${qrKey}`,
          }}
        />
      )}

      <Text style={styles.accountText}>
        Account Number: <Text style={styles.accountNumber}>{accountNumber}</Text>
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.regenerateButton]} onPress={generateAccountNumber}>
          <Text style={styles.buttonText}>Regenerate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.proceedButton]} onPress={proceedToHome}>
          <Text style={styles.buttonText}>Proceed to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
  },
  qr: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  accountText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 40,
    color: '#555',
  },
  accountNumber: {
    fontWeight: '700',
    color: '#111',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  regenerateButton: {
    backgroundColor: '#6c757d', // gray
  },
  proceedButton: {
    backgroundColor: '#007AFF', // blue
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AccountQRCodeScreen;
