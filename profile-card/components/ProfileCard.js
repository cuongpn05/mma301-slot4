import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../styles/common';

export default function ProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image
          source={{ uri: profile.avatar }}
          style={styles.avatar}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>
          <Text style={styles.contact}>{profile.email}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{profile.bio}</Text>

      {profile.skills && profile.skills.length > 0 && (
        <View style={styles.skillsContainer}>
          {profile.skills.map((skill, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.badgeText}>{skill}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 18,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.border,
  },
  headerInfo: {
    marginLeft: 14,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  role: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 2,
  },
  contact: {
    fontSize: 12,
    color: COLORS.subText,
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    marginBottom: 14,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    backgroundColor: COLORS.badgeBg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: COLORS.badgeText,
    fontWeight: '600',
  },
});
