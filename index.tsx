
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Lazy-load web-vitals after initial render to avoid impacting FCP/LCP and main bundle size
function initWebVitals() {
  import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
    function sendToDataLayer(metric: any) {
      const isCLS = metric.name === 'CLS';
      const valueMs = isCLS ? Math.round(metric.value * 1000) : Math.round(metric.value);
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'web_vitals',
        event_category: 'Web Vitals',
        event_action: metric.name,
        event_label: metric.id,
        metric_name: metric.name,
        metric_id: metric.id,
        metric_value: metric.value,
        metric_value_ms: valueMs,
        metric_delta: (metric as any).delta,
        metric_rating: (metric as any).rating,
      });
    }
    onFCP(sendToDataLayer);
    onLCP(sendToDataLayer);
    onCLS(sendToDataLayer);
    onINP(sendToDataLayer);
    onTTFB(sendToDataLayer);
  }).catch(() => {/* no-op */});
}

// Prefer idle time; fallback to window load
const g: any = globalThis as any;
if ('requestIdleCallback' in g) {
  g.requestIdleCallback(initWebVitals);
} else {
  addEventListener('load', initWebVitals, { once: true } as AddEventListenerOptions);
}
