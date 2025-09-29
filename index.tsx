
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

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

// Send Web Vitals to dataLayer for GTM/GA4
function sendToDataLayer(metric: Metric) {
  const isCLS = metric.name === 'CLS';
  const valueMs = isCLS ? Math.round(metric.value * 1000) : Math.round(metric.value);
  // Ensure dataLayer exists
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
