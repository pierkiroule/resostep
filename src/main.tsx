import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/theme.css';
import './styles/scenes.css';
import './styles/emergence.css';
import './styles/emoji-disk.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).then(registration => {
      if (registration.active) window.dispatchEvent(new Event('pwa-ready'));
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'activated') window.dispatchEvent(new Event('pwa-ready'));
        });
      });
    }).catch(() => window.dispatchEvent(new Event('pwa-error')));
  });
}
