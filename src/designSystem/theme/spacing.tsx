export const spacing = {
    none: 0,
    space2: 2,   
    space4: 4, 
    space8: 8,
    space10: 10,
    space12: 12,
    space16: 16,
    space20: 20,
    space24: 24,
    space32: 32,
    space40: 40,
    space48: 48,
    space64: 64,
    space80: 80,
    space96: 96,
} as const;

export type Spacing = keyof typeof spacing;
