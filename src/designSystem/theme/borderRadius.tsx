export const borderRadius = {
    none: 0,
    small: 4,
    medium: 8,
    large: 12,
    xlarge: 16,
    xxlarge: 24,
    xxxlarge: 32,
    full: 9999,
} as const;

export type borderRadius = keyof typeof borderRadius;