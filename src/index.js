import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, 
  Routes,
  Route, } from 'react-router-dom';
import App from './App';
import Country from './routes/country/Country';
import Empty from './routes/empty/Empty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="*" element={<Empty/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
