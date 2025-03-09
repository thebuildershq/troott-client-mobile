export const fonts = {
    family: {
        matterBold: 'Matter-Bold',
        yatterBoldItalic: 'Matter-BoldItalic',
        matterHeavy: 'Matter-Heavy',
        matterHeavyItalic: 'Matter-HeavyItalic',
        matterLight: 'Matter-Light',
        matterLightItalic: 'Matter-LightItalic',
        matterMedium: 'Matter-Medium',
        matterMediumItalic: 'Matter-MediumItalic',
        matterRegular: 'Matter-Regular',
        matterRegularItalic: 'Matter-RegularItalic',
        matterSemibold: 'Matter-Semibold',
        matterSemiboldItalic: 'Matter-SemiboldItalic'
    }
} as const

export type Fonts = keyof typeof fonts.family