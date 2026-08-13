import * as Haptics from 'expo-haptics';
import { useMemo } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type Props = {
  icon: string;
  label: string;
  collected: boolean;
  onCollect: () => void;
};

export function DraggablePart({ icon, label, collected, onCollect }: Props) {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const finish = () => {
    if (collected) return;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => undefined);
    onCollect();
  };

  const gesture = useMemo(() => Gesture.Pan()
    .onBegin(() => { scale.value = withSpring(1.08); })
    .onUpdate((event) => {
      x.value = event.translationX;
      y.value = event.translationY;
    })
    .onEnd((event) => {
      const reachedRocket = event.translationY < -105;
      if (reachedRocket) {
        opacity.value = withTiming(0, { duration: 220 });
        scale.value = withTiming(0.45, { duration: 220 });
        runOnJS(finish)();
      } else {
        x.value = withSpring(0);
        y.value = withSpring(0);
        scale.value = withSpring(1);
      }
    }), [collected]);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }, { scale: scale.value }],
    opacity: collected ? 0.25 : opacity.value,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.card, style]}>
        <View style={styles.iconWrap}><Text style={styles.icon}>{collected ? '✓' : icon}</Text></View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.hint}>{collected ? 'INSTALADO' : Platform.OS === 'web' ? 'ARRASTE PARA CIMA' : 'ARRASTE PARA A NAVE'}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: { width: '31%', minWidth: 95, maxWidth: 130, paddingVertical: 14, paddingHorizontal: 8, alignItems: 'center', borderRadius: 18, backgroundColor: 'rgba(10,20,46,0.92)', borderWidth: 1, borderColor: 'rgba(93,222,255,0.32)' },
  iconWrap: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(69,214,255,0.10)' },
  icon: { fontSize: 28 },
  label: { marginTop: 8, color: '#F7FBFF', fontSize: 12, fontWeight: '800', letterSpacing: 0.7 },
  hint: { marginTop: 5, color: '#6EDCF4', fontSize: 8, fontWeight: '800', letterSpacing: 0.8, textAlign: 'center' },
});
