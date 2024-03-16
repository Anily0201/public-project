import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './router/Index';
import { AppContextProvider } from './context/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={'...loading'}>

    
    <AppContextProvider>
    
    <RouterProvider router={Routers}/>
    
    </AppContextProvider>
    </React.Suspense>

    
  </React.StrictMode>
);


reportWebVitals();
