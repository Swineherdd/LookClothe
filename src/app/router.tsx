import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import {StyleWardrobePage} from '../pages/style-wardrobe-page/index';
import { ShoppingHomePage } from '../pages/shopping-home-page/ui/shopping-home-page';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ShoppingHomePage />,
      },
      {
        path: 'style/wardrobe',
        element: <StyleWardrobePage />,
      },
      {
        path: 'catalog',
        element: <div>Каталог шоппинга</div>,
      },
      {
        path: 'product/:id',
        element: <div>Страница товара</div>,
      },
      {
        path: '*',
        element: <Navigate to="/style/wardrobe" replace />,
      },
    ],
  },
]);