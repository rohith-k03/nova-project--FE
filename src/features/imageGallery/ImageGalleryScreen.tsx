import React, { useMemo, useState } from 'react';
import { Screen, Header, AppText, ChipRow } from '../../components/common';
import { routes } from '../../constants';
import { useGallery } from '../../context/GalleryContext';
import {
  GalleryGrid,
  CollectionTitle,
  EmptyGallery,
  galleryFilters,
  filterItems,
  groupByStyle,
  countLabel,
} from './components';
import { colors, spacing } from '../../theme';

export default function ImageGalleryScreen({ navigation }) {
  const { items, toggleFavorite } = useGallery();
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => filterItems(items, filter), [items, filter]);
  const collections = useMemo(() => groupByStyle(items), [items]);

  const openImage = (item) => navigation.navigate(routes.imagePreview, { id: item.id });

  const renderContent = () => {
    if (filter === 'collections') {
      return collections.map((group) => (
        <React.Fragment key={group.style}>
          <CollectionTitle title={group.style} count={group.items.length} />
          <GalleryGrid items={group.items} onOpen={openImage} onToggleFavorite={toggleFavorite} />
        </React.Fragment>
      ));
    }
    if (visible.length === 0) return <EmptyGallery favorites={filter === 'favorites'} />;
    return <GalleryGrid items={visible} onOpen={openImage} onToggleFavorite={toggleFavorite} />;
  };

  return (
    <Screen scroll>
      <Header
        title="Your gallery"
        onBack={() => navigation.goBack()}
        rightIcon="add"
        onRightPress={() => navigation.navigate(routes.imageGenerator)}
      />

      <AppText variant="caption" color={colors.textSecondary} style={{ marginTop: spacing.sm }}>
        {countLabel(items.length)}
      </AppText>

      <ChipRow
        items={galleryFilters}
        activeId={filter}
        onChange={setFilter}
        style={{ marginTop: spacing.lg, marginBottom: spacing.sm }}
      />

      {renderContent()}

      <AppText
        variant="caption"
        color={colors.textMuted}
        align="center"
        style={{ marginTop: spacing.md }}
      >
        All your creations, safely in one place.
      </AppText>
    </Screen>
  );
}
