import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

// For icons, install react-native-vector-icons or use your own images
// npm install react-native-vector-icons

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.icons8.com/color/96/plant-under-sun.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>INFARM</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Search plants, tips, guides..."
        style={styles.search}
      />

      {/* Categories */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/carrot.png' }}
            style={styles.icon}
          />
          <Text>Vegetables</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/tomato.png' }}
            style={styles.icon}
          />
          <Text>Fruits</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/herbs.png' }}
            style={styles.icon}
          />
          <Text>Herbs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/96/flower.png' }}
            style={styles.icon}
          />
          <Text>Flowers</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Text>🏡</Text>
        <Text>📚</Text>
        <Text>💡</Text>
        <Text>🧠</Text>
        <Text>📊</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  logo: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2e7d32' },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '47%',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  icon: { width: 50, height: 50, marginBottom: 10 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    elevation: 3,
  },
});
// Note: Replace icon URIs with local images or vector icons as needed.