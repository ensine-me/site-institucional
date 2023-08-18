import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '../node_modules/@supabase/supabase-js/dist/module/index';
import { SessionContextProvider } from '../node_modules/@supabase/auth-helpers-react/dist/index';

const supabase = createClient(
  "http://bvvqclcnpatzwoayfxqr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dnFjbGNucGF0endvYXlmeHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5NzA1NjksImV4cCI6MjAwNzU0NjU2OX0.3us7hsaFfLswFrxMrRQe7Xu8g6FJg7doniJnVJuYLTU"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
