import React from "react";
import { ModuleConfig } from "@stonksfi/modules/types";

export enum ModuleKind {
    CONTAINER = 'container',
    ELEMENT = 'element',
}

export type ModuleContainerDisplaySetting = {
    name: string;
    kind: ModuleKind.CONTAINER;
    direction?: 'row' | 'column';
    children?: ModuleDisplaySetting[];
    moduleConfig?: ModuleConfig;

    /* Styling properties */
    rowGap?: number;
    width?: number;
    height?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    fillWidth?: boolean;
    fillHeight?: boolean;
}

export type ModuleElementDisplaySetting = {
    name: string;
    kind: ModuleKind.ELEMENT;
    direction?: 'row' | 'column';
    render: React.ReactNode;
    moduleConfig?: ModuleConfig;
    
    /* Styling properties */
    rowGap?: number;
    width?: number;
    height?: number;
    minHeight?: number;
    minWidth?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    fillWidth?: boolean;
    fillHeight?: boolean;
    allowResize?: boolean;
}

export type ModuleDisplaySetting = ModuleContainerDisplaySetting | ModuleElementDisplaySetting;