import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { barCount } from './voiceData';
import { colors } from '../../../theme';

const BAR_HEIGHT = 44;
const IDLE_SCALE = 0.14;

function Bar({ active, seed }) {
  const scale = useRef(new Animated.Value(IDLE_SCALE)).current;

  useEffect(() => {
    if (!active) {
      Animated.timing(scale, { toValue: IDLE_SCALE, duration: 220, useNativeDriver: true }).start();
      return undefined;
    }

    const peak = 0.35 + ((seed * 37) % 65) / 100;
    const duration = 280 + ((seed * 53) % 320);
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: peak,
          duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: IDLE_SCALE + 0.08,
          duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [active, scale, seed]);

  return <Animated.View style={[styles.bar, { transform: [{ scaleY: scale }] }]} />;
}

export default function Waveform({ active }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: barCount }).map((_, index) => (
        <Bar key={index} active={active} seed={index + 1} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: 4,
    height: BAR_HEIGHT,
    borderRadius: 2,
    marginHorizontal: 2,
    backgroundColor: colors.primary,
  },
});
