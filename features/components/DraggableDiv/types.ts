export interface DraggableDivProps {
    children: any;
    type: string;
    item: any;
    disabled?: boolean;
    /* This is to be used to style the placeholder div when item is dragged */
    placeholderStyle?: any;
}

export interface DraggableDivState {
    isItemBeingDragged: boolean;
}