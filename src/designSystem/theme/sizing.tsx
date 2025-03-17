export const sizing = {
    none: 0,
    xsmall: 8,
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48,
    xxlarge: 64,
    xxxlarge: 80,
    xxXxlarge: 96,
    full: "100%",
  } as const;
  
  export type Sizing = keyof typeof sizing;
  