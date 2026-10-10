import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Screen, Header, AppText, Orb, Pill, OptionSheet, ScreenFooter } from '../../components/common';
import {
  Waveform,
  LiveTranscript,
  VoiceControls,
  useVoiceSession,
  voices,
} from './components';
import { colors, spacing } from '../../theme';

export default function VoiceAssistantScreen({ navigation }) {
  const [muted, setMuted] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [voice, setVoice] = useState(voices[0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const { seconds, transcript } = useVoiceSession(!muted);

  const footer = (
    <ScreenFooter note={`Tap to finish · Nova voice: ${voice}`}>
      <VoiceControls
        muted={muted}
        captions={captions}
        onToggleMute={() => setMuted((value) => !value)}
        onToggleCaptions={() => setCaptions((value) => !value)}
        onFinish={() => navigation.goBack()}
      />
    </ScreenFooter>
  );

  return (
    <Screen scroll footer={footer}>
      <Header
        title="Voice assistant"
        onBack={() => navigation.goBack()}
        rightIcon="options-outline"
        onRightPress={() => setPickerOpen(true)}
      />

      <View style={styles.center}>
        <Pill
          label={muted ? 'Microphone muted' : 'Live conversation'}
          icon={muted ? 'mic-off-outline' : 'pulse-outline'}
        />
        <View style={styles.orb}>
          <Orb size={130} />
        </View>
        <AppText variant="h1" align="center">
          {muted ? 'Paused.' : "I'm listening."}
        </AppText>
        <View style={styles.wave}>
          <Waveform active={!muted} />
        </View>
      </View>

      {captions ? <LiveTranscript seconds={seconds} text={transcript} /> : null}

      <OptionSheet
        visible={pickerOpen}
        title="Nova voice"
        options={voices}
        selected={voice}
        onSelect={setVoice}
        onClose={() => setPickerOpen(false)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  orb: {
    marginVertical: spacing.lg,
  },
  wave: {
    marginTop: spacing.xl,
  },
});
