export interface FittingRoomItem {
  id: string;
  clothing: {
    id: string;
    title: string;
    brand: string;
    images: string[];
    // другие поля если нужны
  };
  addedAt: number;
}

export interface FittingRoomState {
  items: FittingRoomItem[];
  totalCount: number;
}

export type FittingRoomAction =
  | { type: 'ADD_TO_FITTING_ROOM'; payload: { clothing: any } }
  | { type: 'REMOVE_FROM_FITTING_ROOM'; payload: { id: string } }
  | { type: 'CLEAR_FITTING_ROOM' }
  | { type: 'LOAD_FITTING_ROOM'; payload: FittingRoomItem[] };