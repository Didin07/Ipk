// App.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Mahasiswa = ({ nama, npm, ipk }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nama: {nama}</Text>
      <Text style={styles.text}>NPM: {npm}</Text>
      <Text style={styles.text}>IPK: {ipk}</Text>
    </View>
  );
};

const App = () => {
  const [mahasiswaList, setMahasiswaList] = useState([]);

  useEffect(() => {
    // Ganti URL API sesuai dengan endpoint yang Anda miliki
    const apiUrl = 'https://dev.uinsgd.site/api/index.php/mhs/login';

    axios.get(apiUrl)
      .then(response => {
        setMahasiswaList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ScrollView>
      {mahasiswaList.map((mahasiswa, index) => (
        <Mahasiswa key={index} {...mahasiswa} />
      ))}
    </ScrollView>
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

export default App;
