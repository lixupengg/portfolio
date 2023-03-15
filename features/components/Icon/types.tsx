export type IconType = 'questionMark' | 'minus' | 'caretDown' | 'plus';

export interface IconProps {
    icon: IconType,
    color?: 'primary' | 'secondary' | 'black' | 'white' | 'green' | 'red' | 'grey' | 'greyDark',
    size?: 'tiny' | 'small' | 'medium' | 'large',
    className?: string,
    onClick?: () => void,
    hasBackground?: boolean,
    changeColorOnHover?: boolean,
    onHoverColor?: 'primary' | 'secondary' | 'black' | 'white' | 'green' | 'red',
    style?: any,
};
