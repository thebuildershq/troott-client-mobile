export const fontSize = {
    xsmall: 10,
    small: 12,
    medium: 14,
    large: 16,
    xlarge: 20,
    xxlarge: 24,
    xxxlarge: 32,
    xxXxlarge: 40,
} as const;

export type FontSize = keyof typeof fontSize;