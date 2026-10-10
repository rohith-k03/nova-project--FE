import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { colors, radius, sizes, spacing } from '../../theme';

type FileCardProps = {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  name: string;
  meta: string;
  status?: string;
  right?: React.ReactNode;
};

export default function FileCard({ icon = 'document-text-outline', name, meta, status, right }: FileCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={sizes.iconLg} color={colors.primaryText} />
        </View>
        <View style={styles.texts}>
          <AppText variant="bodyStrong" numberOfLines={1}>
            {name}
          </AppText>
          <AppText variant="caption" color={colors.textMuted}>
            {meta}
          </AppText>
        </View>
        {right}
      </View>
      {status ? (
        <View style={styles.status}>
          <Ionicons name="checkmark" size={13} color={colors.success} />
          <AppText variant="caption" color={colors.success} style={styles.statusText}>
            {status}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  texts: {
    flex: 1,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  statusText: {
    marginLeft: spacing.xs + 2,
  },
});
