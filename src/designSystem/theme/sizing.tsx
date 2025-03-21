export const sizing = {
    none: 0,
    four: 4,
    eight: 8,
    ten: 10,
    twelve: 12,
    fourteen: 14,
    sixteen: 16,
    eighteen: 18,
    twenty: 20,
    twentyfour: 24,
    thirtytwo: 32,
    fourtyeight: 48,
    sixtyfour: 64,
    eighty: 80,
    ninetysix: 96,
    hundred: 100,
    full: "100%",
  } as const;
  
  export type Sizing = keyof typeof sizing;
  