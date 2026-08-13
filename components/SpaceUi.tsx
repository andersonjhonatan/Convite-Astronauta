import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Starfield() {
  const stars = useMemo(() => Array.from({ length: 34 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 97}%` as const,
    top: `${(index * 61) % 92}%` as const,
    size: 1 + (index % 3),
    opacity: 0.22 + ((index % 5) * 0.12),
  })), []);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {stars.map((star) => (
        <View key={star.id} style={[styles.star, {
          left: star.left,
          top: star.top,
          width: star.size,
          height: star.size,
          opacity: star.opacity,
        }]} />
      ))}
    </View>
  );
}

export function Pill({ children }: { children: string }) {
  return <View style={styles.pill}><Text style={styles.pillText}>{children}</Text></View>;
}

export function PrimaryButton({ label, onPress, disabled = false }: { label: string; onPress: () => void; disabled?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.primaryButton,
        disabled && styles.primaryButtonDisabled,
        pressed && !disabled && { transform: [{ scale: 0.98 }] },
      ]}
    >
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  star: { position: 'absolute', borderRadius: 10, backgroundColor: '#FFFFFF' },
  pill: { borderWidth: 1, borderColor: 'rgba(96,225,255,0.42)', backgroundColor: 'rgba(18,34,63,0.72)', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 7 },
  pillText: { color: '#80E8FF', fontSize: 10, fontWeight: '900', letterSpacing: 2 },
  primaryButton: { marginTop: 28, minHeight: 56, minWidth: 235, borderRadius: 17, backgroundColor: '#5EDFFF', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 15, shadowColor: '#5EDFFF', shadowOpacity: 0.34, shadowRadius: 16, shadowOffset: { width: 0, height: 7 } },
  primaryButtonDisabled: { backgroundColor: '#243449', shadowOpacity: 0 },
  primaryButtonText: { color: '#03111E', fontSize: 12, fontWeight: '900', letterSpacing: 1.3, textAlign: 'center' },
});
