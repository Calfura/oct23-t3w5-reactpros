import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import MovieList from './components/MovieList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App>

      <MovieList />

    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
