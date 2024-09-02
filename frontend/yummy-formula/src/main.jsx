import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./Redux/Store.jsx";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
