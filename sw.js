// Comeback offline support. Bump VERSION when you change index.html.
const VERSION = "comeback-v2";
const SHELL = ["/", "/index.html", "/manifest.webmanifest", "/icons/favicon.svg", "/icons/icon-192.png", "/icons/icon-512.png", "/icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Pages: try the network first so updates show up, fall back to the saved copy offline.
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).then(r => { caches.open(VERSION).then(c => c.put("/", r.clone())); return r; }).catch(() => caches.match("/")));
    return;
  }
  // Everything else (icons, fonts): saved copy first, then network.
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok && (e.request.url.startsWith(self.location.origin) || e.request.url.includes("fonts.g") || e.request.url.includes("cdnjs.cloudflare.com"))) {
      const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
    }
    return r;
  })));
});
