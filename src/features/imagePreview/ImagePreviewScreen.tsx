import React from 'react';
import { Share } from 'react-native';
import { Screen, Header } from '../../components/common';
import { routes } from '../../constants';
import { useGallery, getResolution } from '../../context/GalleryContext';
import { PreviewImage, PreviewTags, PromptCard, PreviewActions } from './components';

export default function ImagePreviewScreen({ navigation, route }) {
  const { items } = useGallery();
  const item = items.find((entry) => entry.id === route.params?.id) ?? items[0];

  const shareMessage = `${item.title}\n\n${item.prompt}`;
  const handleShare = () => Share.share({ title: item.title, message: shareMessage });

  const handleVariations = () =>
    navigation.replace(routes.imageGenerator, {
      prompt: item.prompt,
      style: item.style,
      ratio: item.ratio,
    });

  const footer = <PreviewActions onDownload={handleShare} onVariations={handleVariations} />;

  return (
    <Screen scroll footer={footer}>
      <Header
        title="Your imagination, realized"
        onBack={() => navigation.goBack()}
        rightIcon="share-social-outline"
        onRightPress={handleShare}
      />
      <PreviewImage source={item.image} ratio={item.ratio} />
      <PreviewTags style={item.style} resolution={getResolution(item.ratio)} ratio={item.ratio} />
      <PromptCard title={item.title.toUpperCase()} prompt={item.prompt} />
    </Screen>
  );
}
