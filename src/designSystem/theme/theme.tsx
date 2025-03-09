import { palette, Palette } from "./palette";
import { fonts, Fonts } from "./font";
import { spacing, Spacing } from "./spacing";
import { padding, Padding } from "./padding";
import { column, Column } from "./column";

export const theme = {
  palette,
  fonts,
  spacing,
  padding,
  column,
} as const;

export type { Fonts, Palette, Spacing, Column, Padding };
