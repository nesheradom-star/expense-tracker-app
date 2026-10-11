import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function SettingsScreen() {
  const { premiumUnlocked, setPremiumUnlocked, resetDemoData, loading } = useAppContext();

  const handleUnlock = () => {
    setPremiumUnlocked(true);
    Alert.alert('Unlocked', 'Lifetime premium access activated for this app.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Monetization</Text>
          <Text style={styles.cardText}>
            One-time purchase model: lifetime access for a small upfront fee.
          </Text>

          <Pressable
            style={[styles.primaryButton, premiumUnlocked && styles.primaryButtonDisabled]}
            onPress={handleUnlock}
            disabled={premiumUnlocked || loading}
          >
            <Text style={styles.primaryButtonText}>
              {premiumUnlocked ? 'Premium Unlocked' : 'Unlock Lifetime Premium ($9.99)'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Premium features</Text>
          <Text style={styles.feature}>• Unlimited custom categories</Text>
          <Text style={styles.feature}>• Advanced monthly reports</Text>
          <Text style={styles.feature}>• CSV export</Text>
          <Text style={styles.feature}>• Budget alerts and reminders</Text>
        </View>

        <Pressable style={styles.secondaryButton} onPress={resetDemoData}>
          <Text style={styles.secondaryButtonText}>Reset demo data</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  cardText: {
    color: '#4b5563',
    fontSize: 14,
    marginBottom: 16,
  },
  feature: {
    color: '#374151',
    fontSize: 14,
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonDisabled: {
    backgroundColor: '#a5b4fc',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 16,
  },
});
