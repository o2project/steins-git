import { GAOptout } from './gaOptout.js';
import { GAOptoutKeyStorage } from './gaOptoutKeyStorage.js';

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function gaInitialize() {
  const storage = new GAOptoutKeyStorage();
  const optout = new GAOptout(storage);

  window.gaOptout = optout || {};
  const gaId = window.__gaId__ || '';

  if (optout.enabled()) {
    optout.gaId = gaId;
    optout.enable();
  }

  gtag('js', new Date());
  gtag('config', gaId);
}

gaInitialize();
