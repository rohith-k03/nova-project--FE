import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, gradients, shadows, spacing } from '../../../theme';

function SideButton({ icon, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.side, active && styles.sideActive]}>
      <Ionicons name={icon} size={22} color={active ? colors.primaryText : colors.textSecondary} />
    </Pressable>
  );
}

export default function VoiceControls({ muted, captions, onToggleMute, onToggleCaptions, onFinish }) {
  return (
    <View style={styles.row}>
      <SideButton icon={muted ? 'mic-off-outline' : 'mic-outline'} active={muted} onPress={onToggleMute} />

      <Pressable onPress={onFinish} style={shadows.glow}>
        <LinearGradient
          colors={gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.main}
        >
          <View style={styles.stop} />
        </LinearGradient>
      </Pressable>

      <SideButton icon="chatbox-ellipses-outline" active={captions} onPress={onToggleCaptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  side: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginHorizontal: spacing.xxl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideActive: {
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primarySoft,
  },
  main: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stop: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.white,
  },
});
