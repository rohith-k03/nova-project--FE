import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppText } from '../../../components/common';
import { colors, gradients, radius, spacing } from '../../../theme';

const CHART_HEIGHT = 130;

const niceMax = (value, step) => Math.ceil(value / step) * step;

export default function BarChart({ data, step, formatTick, formatValue }) {
  const max = niceMax(Math.max(...data.map((item) => item.value)), step);
  const ticks = [];
  for (let tick = step; tick <= max; tick += step) ticks.push(tick);

  return (
    <View>
      <View style={styles.plot}>
        <View style={styles.grid}>
          {[...ticks].reverse().map((tick) => (
            <View key={tick} style={styles.gridRow}>
              <AppText variant="caption" color={colors.textMuted} style={styles.tick}>
                {formatTick(tick)}
              </AppText>
              <View style={styles.line} />
            </View>
          ))}
        </View>

        <View style={styles.bars}>
          {data.map((item) => (
            <View key={item.label} style={styles.barSlot}>
              <AppText variant="caption" color={colors.textSecondary} style={styles.barValue}>
                {formatValue(item.value)}
              </AppText>
              <LinearGradient
                colors={gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[styles.bar, { height: (item.value / max) * CHART_HEIGHT }]}
              />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.labels}>
        {data.map((item) => (
          <AppText key={item.label} variant="caption" color={colors.textMuted} style={styles.label}>
            {item.label}
          </AppText>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  plot: {
    height: CHART_HEIGHT,
    marginTop: spacing.lg,
  },
  grid: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tick: {
    width: 38,
    fontSize: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderSoft,
  },
  bars: {
    ...StyleSheet.absoluteFillObject,
    left: 38,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  barSlot: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  barValue: {
    fontSize: 10,
    marginBottom: 3,
  },
  bar: {
    width: 38,
    borderTopLeftRadius: radius.sm,
    borderTopRightRadius: radius.sm,
  },
  labels: {
    flexDirection: 'row',
    marginLeft: 38,
    marginTop: spacing.sm,
  },
  label: {
    flex: 1,
    textAlign: 'center',
  },
});
