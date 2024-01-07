import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Layout from './pages/Layout';

export default function direction(){
  return(
    <BrowserRouter>
    <Routes>
     <Route>
      <Route path= "/" element= {<Layout/>}/>
      <Route index element={<Home/>} />
      <Route path= "/AboutUs" element={<AboutUs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
