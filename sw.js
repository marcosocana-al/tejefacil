// sw.js - Este archivo es necesario para que el navegador permita instalar la PWA
const CACHE_NAME = 'tejefacil-v1';

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalado correctamente.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activado.');
});

// Interceptar peticiones (requerido por Chrome para mostrar el botón de instalar)
self.addEventListener('fetch', (event) => {
  // Como guardamos en localStorage, no necesitamos cachear rutas complejas ahora mismo,
  // pero el evento "fetch" DEBE existir.
});
