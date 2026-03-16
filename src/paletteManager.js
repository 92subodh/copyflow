const STORAGE_KEY = 'copyflow.palette';

export const AVAILABLE_PALETTES = ['cotton-candy', 'mint-breeze', 'sunset-cream'];

export function applyPalette(paletteName) {
  if (!AVAILABLE_PALETTES.includes(paletteName)) return;
  document.documentElement.setAttribute('data-palette', paletteName);
  localStorage.setItem(STORAGE_KEY, paletteName);
}

export function initPalette() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = AVAILABLE_PALETTES.includes(saved) ? saved : 'cotton-candy';
  applyPalette(initial);

  // Handy devtool helper: setAppPalette('mint-breeze')
  window.setAppPalette = applyPalette;
  window.getAppPalette = () => document.documentElement.getAttribute('data-palette') || 'cotton-candy';
  window.listAppPalettes = () => [...AVAILABLE_PALETTES];
}
