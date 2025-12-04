import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ModeProvider } from './providers/mode-provider';
import { router } from './router';
import '../index.css';

export const App: React.FC = () => {
  return (
    <ModeProvider>
      <RouterProvider router={router} />
    </ModeProvider>
  );
};