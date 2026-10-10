import React, { useState } from 'react';
import { View, Pressable, Modal, FlatList, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from './AppText';
import { colors, radius, sizes, spacing } from '../../theme';

type SelectFieldProps = {
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  pickerTitle?: string;
  style?: StyleProp<ViewStyle>;
};

export default function SelectField({ label, value, options, onChange, icon, pickerTitle, style }: SelectFieldProps) {
  const [open, setOpen] = useState(false);

  const handlePick = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <View style={[styles.wrapper, style]}>
      {label ? (
        <AppText variant="label" color={colors.textSecondary} style={styles.label}>
          {label}
        </AppText>
      ) : null}

      <Pressable onPress={() => setOpen(true)} style={styles.field}>
        {icon ? (
          <Ionicons name={icon} size={sizes.iconMd} color={colors.textMuted} style={styles.icon} />
        ) : null}
        <AppText variant="body" numberOfLines={1} style={styles.value}>
          {value}
        </AppText>
        <Ionicons name="chevron-down" size={sizes.iconMd} color={colors.textMuted} />
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <SafeAreaView edges={['bottom']} style={styles.sheetWrap}>
            <Pressable style={styles.sheet}>
              <AppText variant="h3" style={styles.sheetTitle}>
                {pickerTitle ?? label}
              </AppText>
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                  const selected = item === value;
                  return (
                    <Pressable onPress={() => handlePick(item)} style={styles.option}>
                      <AppText
                        variant="body"
                        color={selected ? colors.primaryText : colors.textPrimary}
                      >
                        {item}
                      </AppText>
                      {selected ? (
                        <Ionicons name="checkmark" size={sizes.iconMd} color={colors.primaryText} />
                      ) : null}
                    </Pressable>
                  );
                }}
              />
            </Pressable>
          </SafeAreaView>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  label: {
    marginBottom: spacing.sm,
  },
  field: {
    height: sizes.inputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
  },
  icon: {
    marginRight: spacing.md,
  },
  value: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.overlay,
  },
  sheetWrap: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
  },
  sheet: {
    maxHeight: 420,
    padding: spacing.xl,
  },
  sheetTitle: {
    marginBottom: spacing.md,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSoft,
  },
});
