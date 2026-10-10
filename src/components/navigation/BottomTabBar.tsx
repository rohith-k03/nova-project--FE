import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppText } from '../common';
import { colors, radius, sizes, spacing } from '../../theme';

const icons = {
  Home: { idle: 'home-outline', active: 'home' },
  Chats: { idle: 'chatbubble-outline', active: 'chatbubble' },
  Tools: { idle: 'grid-outline', active: 'grid' },
  Profile: { idle: 'person-outline', active: 'person' },
};

export default function BottomTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, spacing.sm) }]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const tint = focused ? colors.primaryText : colors.textMuted;
        const icon = icons[route.name];

        const handlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
        };

        return (
          <Pressable key={route.key} onPress={handlePress} style={styles.item}>
            <View style={[styles.pill, focused && styles.pillActive]}>
              <Ionicons name={focused ? icon.active : icon.idle} size={sizes.iconMd} color={tint} />
              <AppText variant="caption" color={tint} style={styles.label}>
                {route.name}
              </AppText>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.borderSoft,
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  pill: {
    minWidth: 64,
    alignItems: 'center',
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.lg,
  },
  pillActive: {
    backgroundColor: colors.primarySoft,
  },
  label: {
    marginTop: 2,
    fontSize: 10,
  },
});
