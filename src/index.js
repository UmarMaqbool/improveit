import React from 'react';
import './index.css';
import App from './App';
import { hydrate, render } from 'react-dom';

const RenderedApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const root = document.getElementById("root");
if(root.hasChildNodes()) {
  hydrate(<RenderedApp />, root);
} else {
  render(<RenderedApp />, root);
}
