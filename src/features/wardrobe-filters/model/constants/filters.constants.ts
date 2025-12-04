import { FilterOption } from "../types/filters.interface";

export const FILTER_CATEGORIES = [
  { id: 'category', label: 'Категория' },
  { id: 'color', label: 'Цвет' },
  { id: 'season', label: 'Сезон' },
  { id: 'tags', label: 'Теги' },
  { id: 'storage', label: 'Место хранения' },
] as const;

export const CATEGORY_OPTIONS: FilterOption[] = [
  { id: 'jackets', label: 'Куртки', value: 'Куртки', count: 12 },
  { id: 'jeans', label: 'Джинсы', value: 'Джинсы', count: 8 },
  { id: 'sweaters', label: 'Свитеры', value: 'Свитеры', count: 15 },
  { id: 'dresses', label: 'Платья', value: 'Платья', count: 6 },
  { id: 'jumpers', label: 'Джемперы', value: 'Джемперы', count: 10 },
  { id: 'skirts', label: 'Юбки', value: 'Юбки', count: 7 },
  { id: 'shirts', label: 'Рубашки', value: 'Рубашки', count: 9 },
  { id: 'shoes', label: 'Обувь', value: 'Обувь', count: 14 },
  { id: 'coats', label: 'Пальто', value: 'Пальто', count: 5 },
  { id: 'blouses', label: 'Блузки', value: 'Блузки', count: 11 },
  { id: 'pants', label: 'Брюки', value: 'Брюки', count: 13 },
  { id: 'blazers', label: 'Пиджаки', value: 'Пиджаки', count: 8 },
];

export const COLOR_OPTIONS: FilterOption[] = [
  { id: 'red', label: 'Красный', value: 'Красный', count: 5 },
  { id: 'blue', label: 'Синий', value: 'Синий', count: 7 },
  { id: 'brown', label: 'Коричневый', value: 'Коричневый', count: 4 },
  { id: 'black', label: 'Чёрный', value: 'Чёрный', count: 15 },
  { id: 'green', label: 'Зелёный', value: 'Зелёный', count: 3 },
  { id: 'gray', label: 'Серый', value: 'Серый', count: 9 },
  { id: 'white', label: 'Белый', value: 'Белый', count: 12 },
  { id: 'pink', label: 'Розовый', value: 'Розовый', count: 6 },
  { id: 'yellow', label: 'Жёлтый', value: 'Жёлтый', count: 2 },
  { id: 'orange', label: 'Оранжевый', value: 'Оранжевый', count: 1 },
  { id: 'purple', label: 'Фиолетовый', value: 'Фиолетовый', count: 3 },
  { id: 'beige', label: 'Бежевый', value: 'Бежевый', count: 8 },
];

export const SEASON_OPTIONS: FilterOption[] = [
  { id: 'autumn', label: 'Осень', value: 'Осень', count: 12 },
  { id: 'spring', label: 'Весна', value: 'Весна', count: 8 },
  { id: 'winter', label: 'Зима', value: 'Зима', count: 10 },
  { id: 'summer', label: 'Лето', value: 'Лето', count: 9 },
];

export const TAG_OPTIONS: FilterOption[] = [
  { id: 'casual', label: 'casual', value: 'casual', count: 18 },
  { id: 'bright', label: 'яркая', value: 'яркая', count: 6 },
  { id: 'denim', label: 'деним', value: 'деним', count: 8 },
  { id: 'warm', label: 'тепло', value: 'тепло', count: 7 },
  { id: 'cozy', label: 'уютно', value: 'уютно', count: 5 },
  { id: 'evening', label: 'вечер', value: 'вечер', count: 4 },
  { id: 'holiday', label: 'праздник', value: 'праздник', count: 3 },
  { id: 'office', label: 'офис', value: 'офис', count: 9 },
  { id: 'classic', label: 'классика', value: 'классика', count: 11 },
  { id: 'basic', label: 'базовая', value: 'базовая', count: 15 },
  { id: 'sneakers', label: 'кроссовки', value: 'кроссовки', count: 14 },
  { id: 'stylish', label: 'стильно', value: 'стильно', count: 10 },
  { id: 'romantic', label: 'романтика', value: 'романтика', count: 5 },
  { id: 'formal', label: 'формально', value: 'формально', count: 7 },
];

export const STORAGE_OPTIONS: FilterOption[] = [
  { id: 'wardrobe_shelf2', label: 'Шкаф, полка 2', value: 'Шкаф, полка 2', count: 6 },
  { id: 'dresser_drawer1', label: 'Комод, ящик 1', value: 'Комод, ящик 1', count: 4 },
  { id: 'dresser_drawer2', label: 'Комод, ящик 2', value: 'Комод, ящик 2', count: 8 },
  { id: 'wardrobe_hanger', label: 'Шкаф, вешалка', value: 'Шкаф, вешалка', count: 5 },
  { id: 'wardrobe_shelf3', label: 'Шкаф, полка 3', value: 'Шкаф, полка 3', count: 3 },
  { id: 'hanger', label: 'Вешалка', value: 'Вешалка', count: 2 },
  { id: 'shoe_rack', label: 'Обувная полка', value: 'Обувная полка', count: 7 },
  { id: 'wardrobe_shelf1', label: 'Шкаф, полка 1', value: 'Шкаф, полка 1', count: 9 },
];

export const FILTER_OPTIONS: Record<string, FilterOption[]> = {
  category: CATEGORY_OPTIONS,
  color: COLOR_OPTIONS,
  season: SEASON_OPTIONS,
  tags: TAG_OPTIONS,
  storage: STORAGE_OPTIONS,
};