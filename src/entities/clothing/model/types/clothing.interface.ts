export interface IClothing {
  id: string;
  title: string;
  brand: string;
  category: string;
  subCategory?: string;
  colors: string[];
  seasons: string[];
  notes?: string;
  storageLocation: string;
  shopLink?: string;
  price?: string;
  images: string[];
  inFittingRoom: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ClothingCard = Pick<
  IClothing, 
  'id' | 'title' | 'brand' | 'images' | 'inFittingRoom'
>;