export type colors = {
    primaryColor1: string;
    primaryColor2: string;
    primaryColor3: string;
    primaryColor4: string;
    primaryColor5: string;
    primaryColor6: string;
    primaryColor7: string;
    primaryColor8: string;
    primaryColor9: string;
    primaryColor10: string;
    primaryColor11: string;
    primaryColor12: string;
    
    secondaryColor1: string;
    secondaryColor2: string;
    secondaryColor3: string;
    secondaryColor4: string;
    secondaryColor5: string;
    secondaryColor6: string;
    secondaryColor7: string;
    secondaryColor8: string;
    secondaryColor9: string;
    secondaryColor10: string;
    secondaryColor11: string;
    secondaryColor12: string;

    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    grey6: string;
    grey7: string;
    grey8: string;
    grey9: string;
    grey10: string;
    grey11: string;
    grey12: string;

    systemOrange: string;
    systemRed: string;
    systemGreen: string;
    systemBlue: string;
    systemCream: string;
}

export type space = {
    veryTiny: string;
    tiny: string;
    small: string;
    medium: string;
    big: string;
    large: string;
}

export type fontSizes = {
    title54: string;
    title46: string;

    subtitle40: string;
    subtitle38: string;
    subtitle32: string;
    subtitle28: string;
    subtitle24: string;
    subtitle20: string;

    content18: string;
    content16: string;
    content14: string;
    content12: string;
    content10: string;
}

export type fontWeights = {
    light: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
}

export type shadows = {
    small: string;
    medium: string;
    large: string;
}

export interface Theme {
    colors: colors;
    space: space;
    fontSizes: fontSizes;
    fontWeights: fontWeights;
    shadows: shadows;
    [otherOptions: string]: unknown;
};