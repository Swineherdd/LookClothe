export interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

export const STYLE_NAV_ITEMS: NavItem[] = [
  { path: '/style', label: 'Главная' },
  { path: '/style/wardrobe', label: 'Мои вещи' },
  { path: '/style/categories', label: 'Разделы' },
  { path: '/style/looks', label: 'Образы' },
];