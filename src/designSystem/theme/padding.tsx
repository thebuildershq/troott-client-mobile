export const padding = {
    none: 0,
    small: 4,
    medium: 8,
    large: 16,
    xlarge: 24,
    xxlarge: 32,
    xxxlarge: 40,
} as const;

export type Padding = keyof typeof padding;