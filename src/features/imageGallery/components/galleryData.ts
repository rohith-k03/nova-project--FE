export const galleryFilters = [
  { id: 'all', label: 'All images' },
  { id: 'favorites', label: 'Favorites' },
  { id: 'collections', label: 'Collections' },
];

export const filterItems = (items, filterId) =>
  filterId === 'favorites' ? items.filter((item) => item.favorite) : items;

export const groupByStyle = (items) => {
  const groups = {};
  items.forEach((item) => {
    if (!groups[item.style]) groups[item.style] = [];
    groups[item.style].push(item);
  });
  return Object.keys(groups).map((style) => ({ style, items: groups[style] }));
};

export const countLabel = (count) =>
  `${count} ${count === 1 ? 'creation' : 'creations'}. Endless possibilities.`;
