import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText, Button, ScreenFooter } from '../../../components/common';
import { colors, spacing } from '../../../theme';

export default function PreviewActions({ onDownload, onVariations }) {
  return (
    <ScreenFooter>
      <View style={styles.row}>
        <Button title="Download" icon="download-outline" onPress={onDownload} style={styles.primary} />
        <Button
          title="Variations"
          icon="refresh-outline"
          variant="secondary"
          onPress={onVariations}
          style={styles.secondary}
        />
      </View>
      <View style={styles.saved}>
        <Ionicons name="checkmark" size={13} color={colors.success} />
        <AppText variant="caption" color={colors.success} style={styles.savedText}>
          Saved to your gallery
        </AppText>
      </View>
    </ScreenFooter>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  primary: {
    flex: 1,
    marginRight: spacing.md,
  },
  secondary: {
    flex: 1,
  },
  saved: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  savedText: {
    marginLeft: spacing.xs + 2,
  },
});
