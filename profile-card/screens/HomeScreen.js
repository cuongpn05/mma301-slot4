import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import { PROFILES } from '../data/profiles';
import { COLORS } from '../styles/common';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile Card (StyleSheet)</Text>
        <Text style={styles.headerSubtitle}>Danh sách thành viên</Text>
      </View>

      <FlatList
        data={PROFILES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProfileCard profile={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  headerSubtitle: {
    fontSize: 13,
    color: COLORS.subText,
    marginTop: 4,
  },
  list: {
    padding: 16,
  },
});
