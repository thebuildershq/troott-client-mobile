export const borderStoke = {
    none: 0,
    hairline: 0.5,
    thin: 1,
    thick: 2,
    extraThick: 4,
  } as const;
  
  export type BorderStoke = keyof typeof borderStoke;
  