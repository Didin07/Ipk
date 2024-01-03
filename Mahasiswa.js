// Mahasiswa.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Mahasiswa = ({ nama, npm, ipk }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nama: {nama}</Text>
      <Text style={styles.text}>NPM: {npm}</Text>
      <Text style={styles.text}>IPK: {ipk}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Mahasiswa;
