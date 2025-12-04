import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { FittingRoomState, FittingRoomAction, FittingRoomItem } from '../types';

const FITTING_ROOM_STORAGE_KEY = 'fitting_room_items';

const initialState: FittingRoomState = {
  items: [],
  totalCount: 0,
};

const fittingRoomReducer = (
  state: FittingRoomState,
  action: FittingRoomAction
): FittingRoomState => {
  switch (action.type) {
    case 'ADD_TO_FITTING_ROOM': {
      const newItem: FittingRoomItem = {
        id: action.payload.clothing.id,
        clothing: action.payload.clothing,
        addedAt: Date.now(),
      };
      
      const updatedItems = state.items.find(item => item.id === newItem.id)
        ? state.items
        : [...state.items, newItem];
      
      return {
        ...state,
        items: updatedItems,
        totalCount: updatedItems.length,
      };
    }
    
    case 'REMOVE_FROM_FITTING_ROOM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        totalCount: updatedItems.length,
      };
    }
    
    case 'CLEAR_FITTING_ROOM':
      return {
        ...initialState,
      };
    
    case 'LOAD_FITTING_ROOM':
      return {
        items: action.payload,
        totalCount: action.payload.length,
      };
    
    default:
      return state;
  }
};

interface FittingRoomContextValue {
  state: FittingRoomState;
  addToFittingRoom: (clothing: any) => void;
  removeFromFittingRoom: (id: string) => void;
  clearFittingRoom: () => void;
  isInFittingRoom: (id: string) => boolean;
}

const FittingRoomContext = createContext<FittingRoomContextValue | undefined>(undefined);

export const FittingRoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(fittingRoomReducer, initialState);

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem(FITTING_ROOM_STORAGE_KEY);
    if (saved) {
      try {
        const items = JSON.parse(saved);
        dispatch({ type: 'LOAD_FITTING_ROOM', payload: items });
      } catch (error) {
        console.error('Failed to load fitting room from localStorage:', error);
      }
    }
  }, []);

  // Сохранение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem(FITTING_ROOM_STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addToFittingRoom = (clothing: any) => {
    dispatch({ type: 'ADD_TO_FITTING_ROOM', payload: { clothing } });
  };

  const removeFromFittingRoom = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_FITTING_ROOM', payload: { id } });
  };

  const clearFittingRoom = () => {
    dispatch({ type: 'CLEAR_FITTING_ROOM' });
  };

  const isInFittingRoom = (id: string) => {
    return state.items.some(item => item.id === id);
  };

  const value: FittingRoomContextValue = {
    state,
    addToFittingRoom,
    removeFromFittingRoom,
    clearFittingRoom,
    isInFittingRoom,
  };

  return (
    <FittingRoomContext.Provider value={value}>
      {children}
    </FittingRoomContext.Provider>
  );
};

export const useFittingRoom = () => {
  const context = useContext(FittingRoomContext);
  if (!context) {
    throw new Error('useFittingRoom must be used within FittingRoomProvider');
  }
  return context;
};