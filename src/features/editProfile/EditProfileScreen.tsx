import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { Screen, Header, Input, Button, ScreenFooter } from '../../components/common';
import { useProfile, getInitials } from '../../context/ProfileContext';
import { isValidEmail } from '../../utils/validators';
import { PhotoPicker, AboutNotes, aboutLimit } from './components';
import { colors } from '../../theme';

type ProfileErrors = { name?: string; email?: string };

export default function EditProfileScreen({ navigation }) {
  const { profile, updateProfile } = useProfile();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [about, setAbout] = useState(profile.about);
  const [photoUri, setPhotoUri] = useState(profile.photoUri);
  const [errors, setErrors] = useState<ProfileErrors>({});

  const pickPhoto = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'image/*',
      copyToCacheDirectory: true,
    });
    if (result.canceled || !result.assets?.length) return;
    setPhotoUri(result.assets[0].uri);
  };

  const handleSave = () => {
    const next: ProfileErrors = {};
    if (name.trim().length < 2) next.name = 'Enter your full name';
    if (!isValidEmail(email)) next.email = 'Enter a valid email address';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    updateProfile({
      name: name.trim(),
      email: email.trim(),
      about: about.trim(),
      photoUri,
    });
    navigation.goBack();
  };

  const footer = (
    <ScreenFooter note="You can update your details anytime.">
      <Button title="Save changes" icon="checkmark" onPress={handleSave} />
    </ScreenFooter>
  );

  return (
    <Screen scroll keyboardAware footer={footer}>
      <Header title="Edit profile" onBack={() => navigation.goBack()} />

      <PhotoPicker
        initials={getInitials(name)}
        uri={photoUri}
        onChange={pickPhoto}
        onRemove={() => setPhotoUri(undefined)}
      />

      <Input
        label="Full name"
        icon="person-outline"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
        error={errors.name}
      />
      <Input
        label="Email address"
        icon="mail-outline"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        rightIcon={isValidEmail(email) ? 'checkmark-circle-outline' : undefined}
        rightColor={colors.success}
        error={errors.email}
      />
      <Input
        label="About you"
        multiline
        autoCapitalize="sentences"
        maxLength={aboutLimit}
        value={about}
        onChangeText={setAbout}
      />
      <AboutNotes length={about.length} />
    </Screen>
  );
}
