export const typography={
  light: "Matter-Light",
  light_italic: "Matter-LightItalic",
  regular: "Matter-Regular",
  regular_italic: "Matter-RegularItalic",
  medium: "Matter-Medium",
  medium_italic: "Matter-MediumItalic",
  semibold: "Matter-Semibold",
  semibold_italic: "Matter-SemiboldItalic",
  bold: "Matter-Bold",
  bold_italic: "Matter-BoldItalic",
  heavy: "Matter-Heavy",
  heavy_italic: "Matter-HeavyItalic"
} as const

export type TypograyphyType = typeof typography