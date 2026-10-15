// Fjord palette. Edit hex values here, then run `bun build.mjs` to regenerate styles.css.
// Keys mirror the CSS custom properties EdgeEver defines in apps/web/src/styles/globals.css.

export const light = {
  // Cool blue-gray ink scale (replaces the neutral "slate" ramp).
  slate: {
    50: "#f7f9fc", 100: "#eef2f7", 200: "#dde4ee", 300: "#c5cfdd", 400: "#95a2b8",
    500: "#66748d", 600: "#4a5770", 700: "#36425a", 800: "#232d42", 900: "#172033", 950: "#0c1322",
  },
  // Indigo accent (replaces the brand green ramp).
  accent: {
    50: "#f0f5ff", 100: "#dee8fd", 200: "#bed0fa", 300: "#8cacf2", 400: "#5784e6",
    500: "#2f5fd0", 600: "#264eb2", 700: "#204094", 800: "#1c3474", 900: "#192b5c", 950: "#0f1938",
  },
  brand: {
    base: "#2f5fd0", hover: "#264eb2", muted: "#dee8fd", soft: "#f0f5ff", border: "#bed0fa", text: "#20408f",
  },
  workspace: {
    canvas: "#eaeff5", sidebar: "#e1e8f0", memoList: "#f2f5f9", editor: "#f8fafc",
    divider: "#d5dde8", memoDivider: "#dbe2ec", selection: "#d6dfeb",
  },
  tooltip: { bg: "#ffffff", fg: "#5b6880", border: "#d5dde8" },
  controls: { switchThumb: "#ffffff", switchTrackOn: "#2f5fd0", switchThumbOn: "#ffffff", checkboxOn: "#2f5fd0", checkboxMark: "#ffffff" },
  search: { match: "rgb(255 214 102 / 0.75)", active: "rgb(255 176 32 / 0.9)" },
  scrollbar: { thumb: "rgb(74 87 112 / 0.28)", hover: "rgb(74 87 112 / 0.42)" },
  darkSurface: "#ffffff",
  memoContentDivider: "#172033",
  shadcn: {
    background: "#f2f5f9", foreground: "#172033",
    card: "#ffffff", cardForeground: "#172033",
    popover: "#ffffff", popoverForeground: "#172033",
    primary: "#2f5fd0", primaryForeground: "#ffffff",
    secondary: "#e6ecf3", secondaryForeground: "#1d2840",
    muted: "#edf1f6", mutedForeground: "#5b6880",
    accent: "#dfe6f0", accentForeground: "#172033",
    border: "#d5dde8", input: "#d5dde8", ring: "#2f5fd0",
  },
};

export const dark = {
  // Dark ramps are inverted like EdgeEver's own: 50 is the deepest surface, 950 the brightest text.
  slate: {
    50: "#0f1420", 100: "#161d2c", 200: "#283248", 300: "#62708c", 400: "#7d8ba6",
    500: "#96a3bc", 600: "#b2bdd1", 700: "#c9d2e2", 800: "#dce3ee", 900: "#e7ecf4", 950: "#f0f4fa",
  },
  accent: {
    50: "#101a33", 100: "#162548", 200: "#243d78", 300: "#4670dc", 400: "#7aa2ff",
    500: "#406cde", 600: "#5f8bf5", 700: "#7aa2ff", 800: "#aac4ff", 900: "#d0dfff", 950: "#eaf1ff",
  },
  brand: {
    base: "#406cde", hover: "#5f8bf5", muted: "#16254a", soft: "#101a33", border: "#243d78", text: "#7aa2ff",
  },
  workspace: {
    canvas: "#0f1420", sidebar: "#131a28", memoList: "#182031", editor: "#1c2538",
    divider: "#2a3550", memoDivider: "#303c58", selection: "#2a3654",
  },
  tooltip: { bg: "#222c42", fg: "#dbe3f0", border: "#34405c" },
  controls: { switchThumb: "#e7ecf4", switchTrackOn: "#7aa2ff", switchThumbOn: "#0f1420", checkboxOn: "#7aa2ff", checkboxMark: "#0f1420" },
  search: { match: "rgb(64 108 222 / 0.34)", active: "rgb(122 162 255 / 0.5)" },
  scrollbar: { thumb: "rgb(150 163 188 / 0.32)", hover: "rgb(150 163 188 / 0.5)" },
  darkSurface: "#1c2538",
  memoContentDivider: "#5d6b88",
  shadcn: {
    background: "#0f1420", foreground: "#dfe6f1",
    card: "#182031", cardForeground: "#dfe6f1",
    popover: "#1c2538", popoverForeground: "#dfe6f1",
    primary: "#7aa2ff", primaryForeground: "#0f1420",
    secondary: "#222c42", secondaryForeground: "#e3e9f3",
    muted: "#222c42", mutedForeground: "#94a2bb",
    accent: "#26314a", accentForeground: "#eef2f8",
    border: "#2e3a55", input: "#2e3a55", ring: "#7aa2ff",
  },
};
