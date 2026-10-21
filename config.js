/*
 * Diário de Obra Rijo · configuração
 * API_URL = App da Web do Apps Script "API Vobi 06 - APP Diário de Obras Rijo" (termina em /exec).
 * Com API_URL = 'demo' o app roda em demonstração, com dados de exemplo e sem servidor.
 */
window.RDO_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzCaC4qqu4PEjqHnbKXk0jDBz7tFOO-ae4mnV-lcF4bPUUUAP6iA0V1vwPe0woj2SD-/exec',
  CARIMBO_FOTO: true,      // grava a marca d'água Rijo (obra, data, hora, coordenadas) na foto
  FOTO_MAX_PX: 2560,       // maior lado da foto (2560 = ~5 MP; antes 1600)
  FOTO_QUALIDADE: 0.88,    // JPEG: ~0,8 a 1,5 MB por foto (antes 0,72)
  FOTO_MIN_PX: 1280        // abaixo disso a foto da galeria recebe o aviso "baixa resolução"
};
