export const padding = {
    none: 0,
    four: 4,
    eight: 8,
    ten: 10,
    twelve: 12,
    fourteen: 14,
    sixteen: 16,
    eighteen: 18,
    twenty: 20,
    xlarge: 24,
    xxlarge: 32,
    xxxlarge: 40,
} as const;

export type Padding = keyof typeof padding;