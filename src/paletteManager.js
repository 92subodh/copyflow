const STORAGE_KEY = 'copyflow.palette';

export const AVAILABLE_PALETTES = ['p', 'cotton-candy', 'mint-breeze', 'sunset-cream'];

export function applyPalette(paletteName) {
  if (!AVAILABLE_PALETTES.includes(paletteName)) return;
  document.documentElement.setAttribute('data-palette', paletteName);
  localStorage.setItem(STORAGE_KEY, paletteName);
}

export function initPalette() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = AVAILABLE_PALETTES.includes(saved) ? 'p' : 'p';
  applyPalette(initial);

  // Handy devtool helper: setAppPalette('mint-breeze')
  window.setAppPalette = applyPalette;
  window.getAppPalette = () => document.documentElement.getAttribute('data-palette') || 'p';
  window.listAppPalettes = () => [...AVAILABLE_PALETTES];
}
