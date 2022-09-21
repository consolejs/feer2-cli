import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Router from '@/router';
export default function App() {
  useEffect(() => {
    const el = document.getElementById('loading');
    if (el) {
      el.style.display = 'none';
    }
  }, []);

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}
