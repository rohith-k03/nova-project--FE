import React from 'react';
import { Modal, Pressable, ScrollView, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, spacing } from '../../theme';

export const normalizeOptions = (options) =>
  options.map((option) =>
    typeof option === 'string' ? { id: option, label: option } : option
  );

export default function OptionSheet({ visible, title, options, selected, onSelect, onClose }) {
  const items = normalizeOptions(options);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <View style={styles.handle} />
          {title ? (
            <AppText variant="h3" style={styles.title}>
              {title}
            </AppText>
          ) : null}
          <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((item) => {
              const active = item.id === selected;
              return (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    onSelect(item.id);
                    onClose();
                  }}
                  style={[styles.row, active && styles.rowActive]}
                >
                  <AppText
                    variant="body"
                    color={active ? colors.primaryText : colors.textPrimary}
                  >
                    {item.label}
                  </AppText>
                  {active ? (
                    <Ionicons name="checkmark" size={18} color={colors.primaryText} />
                  ) : null}
                </Pressable>
              );
            })}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.overlay,
  },
  sheet: {
    maxHeight: '60%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  title: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
  },
  rowActive: {
    backgroundColor: colors.primarySoft,
  },
});
