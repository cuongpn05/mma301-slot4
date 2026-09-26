import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2F4F7',
  cardBackground: '#FFFFFF',
  text: '#1C1C1E',
  subText: '#636366',
  border: '#E5E5EA',
  badgeBg: '#EBF3FF',
  badgeText: '#007AFF',
  shadow: '#000000',
};

export const commonStyles = StyleSheet.create({
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
