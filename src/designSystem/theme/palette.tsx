export const palette = {
    grey50: "#F7F7F7",
    grey100: "#EAEAEA",
    grey200: "#bdbdbd",
    grey300: "#9d9d9d",
    grey400: "#707070",
    grey500: "#545454",
    baseGrey: "#292929",
    grey700: "#252525",
    grey800: "#1d1d1d",
    grey900: "#171717",

    lightGrey: "#3C3C435C",
    lightBlue: "#659DF6",

    green100: "#CEFFF8",
    green200: "#ADFFF3",
    green300: "#83FFED",
    green400: "#5AFFE7",
    green500: "#31FFE1",
    baseGreen: "#08FFDB",
    green700: "#07D4B6",
    green800: "#05AA92",
    green900: "#04806E",
    green1000: "#035549",

    white: "#FFFFFF",
    baseWhite: "white",
    baseBlack: "#000000",
    elevatedBlack: "#1C1C1E",
} as const;

export type Palette = keyof typeof palette;
