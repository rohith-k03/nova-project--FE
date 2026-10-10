import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { images } from '../constants/images';
import { formatDayLabel, titleFromPrompt } from '../utils/format';
import { pickImage } from '../utils/imagePool';

const DAY = 24 * 60 * 60 * 1000;
const DAILY_CREDITS = 4;
const g = images.gallery;

export const styleOptions = ['Cinematic', '3D render', 'Illustration'];

export const ratioOptions = [
  { id: '1:1', width: 1024, height: 1024 },
  { id: '3:4', width: 768, height: 1024 },
  { id: '16:9', width: 1024, height: 576 },
];

const findRatio = (id) => ratioOptions.find((option) => option.id === id) ?? ratioOptions[1];

type GalleryItem = {
  id: string;
  title: string;
  style: string;
  image: ImageSourcePropType;
  prompt: string;
  favorite: boolean;
  ratio: string;
  createdAt: number;
  when: string;
};

type GalleryContextValue = {
  items: GalleryItem[];
  credits: number;
  addImage: (image: { prompt: string; style: string; ratio: string }) => GalleryItem | null;
  toggleFavorite: (id: string) => void;
};

export const getResolution = (id) => {
  const { width, height } = findRatio(id);
  return `${width} × ${height}`;
};

const seedItem = (id, title, style, daysAgo, image, prompt, favorite = false) => ({
  id,
  title,
  style,
  image,
  prompt,
  favorite,
  ratio: '3:4',
  createdAt: Date.now() - daysAgo * DAY,
});

const withLabel = (item) => ({ ...item, when: formatDayLabel(item.createdAt) });

const seedItems = () =>
  [
    seedItem(
      'g1',
      'Lunar solitude',
      'Cinematic',
      0,
      g.lunarSolitude,
      'A lone astronaut on dunes, a giant lavender planet on the horizon. Cinematic light, silver suit, drifting dust.',
      true
    ),
    seedItem('g2', 'Quiet architecture', '3D render', 0, g.quietArchitecture, 'A minimal glass pavilion on still water at dusk, soft studio lighting.'),
    seedItem('g3', 'Glass bloom', '3D render', 1, g.glassBloom, 'A translucent violet flower made of glass, glowing from within.'),
    seedItem('g4', 'Neon after hours', 'Cinematic', 1, g.neonAfterHours, 'A rain-soaked city alley lit by neon signs, reflections on wet stone.'),
    seedItem('g5', 'Soft horizons', 'Illustration', 2, g.softHorizons, 'Layered desert dunes in dusty pink and lavender, hand-painted texture.'),
    seedItem('g6', 'Orbital rhythm', '3D render', 2, g.orbitalRhythm, 'Interlocking chrome rings orbiting a luminous sphere on a dark backdrop.', true),
  ].map(withLabel);

const GalleryContext = createContext<GalleryContextValue>({
  items: [],
  credits: 0,
  addImage: () => null,
  toggleFavorite: () => {},
});

export function GalleryProvider({ children }) {
  const [items, setItems] = useState(seedItems);
  const [credits, setCredits] = useState(DAILY_CREDITS);

  const addImage = useCallback(
    ({ prompt, style, ratio }) => {
      if (credits <= 0) return null;
      const created = withLabel({
        id: `img-${Date.now()}-${items.length}`,
        title: titleFromPrompt(prompt),
        style,
        prompt,
        ratio: findRatio(ratio).id,
        image: pickImage(style, items.length),
        favorite: false,
        createdAt: Date.now(),
      });
      setItems((prev) => [created, ...prev]);
      setCredits((prev) => prev - 1);
      return created;
    },
    [credits, items.length]
  );

  const toggleFavorite = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, favorite: !item.favorite } : item))
    );
  }, []);

  const value = useMemo(
    () => ({ items, credits, addImage, toggleFavorite }),
    [items, credits, addImage, toggleFavorite]
  );

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}

export const useGallery = () => useContext(GalleryContext);
