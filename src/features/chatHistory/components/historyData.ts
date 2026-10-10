import { conversations } from '../../../data/conversations';

export { conversations };

export const filters = [
  { id: 'all', label: 'All chats' },
  { id: 'pinned', label: 'Pinned' },
  { id: 'archived', label: 'Archived' },
];

export const groupOrder = ['Today', 'Yesterday', 'Earlier'];

export const buildSections = (items) =>
  groupOrder
    .map((title) => ({ title, data: items.filter((item) => item.group === title) }))
    .filter((section) => section.data.length > 0);

export const applyFilters = (items, filterId, query) => {
  const needle = query.trim().toLowerCase();

  return items.filter((item) => {
    if (filterId === 'pinned' && !item.pinned) return false;
    if (filterId === 'archived' && !item.archived) return false;
    if (filterId === 'all' && item.archived) return false;
    if (!needle) return true;
    return (
      item.title.toLowerCase().includes(needle) || item.preview.toLowerCase().includes(needle)
    );
  });
};
