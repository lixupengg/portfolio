import React, { ReactNode } from 'react';
import { ModuleDisplaySetting } from './types';
import { StyledFlexContainer, StyledFlexElement} from './styles';

interface Props {
    settings: ModuleDisplaySetting[];
}

const determineWidthHeight = (setting: ModuleDisplaySetting, type: 'width' | 'height') => {
    if (type === 'width') {
        if (setting.fillWidth) {
            return "100%";
        }
        return `${setting.width}px` || "auto";
    } else { 
        if (setting.fillHeight) {
            return "100%";
        }
        return `${setting.height}px` || "auto";
    }
}
const Layout = (props: Props) => {
	const { settings } = props;
    const renderModules =(settings: ModuleDisplaySetting[]) => {
        return settings.map((setting: ModuleDisplaySetting) => {
            if (setting.kind === 'container') {
                return (
                    <StyledFlexContainer
                        key={setting.name}
                        style={{
                            flexDirection: setting.direction || "row",
                            height: determineWidthHeight(setting, 'height'),
                            maxWidth: determineWidthHeight(setting, 'width'),
                            paddingTop: `${setting.paddingTop || 0}px`,
                            paddingRight: `${setting.paddingRight || 0}px`,
                            paddingBottom: `${setting.paddingBottom || 0}px`,
                            paddingLeft: `${setting.paddingLeft || 0}px`,
                            rowGap: `${setting.rowGap || 0}px`,
                            flexGrow: `${setting.fillHeight || setting.fillWidth ? 5 : '0 1 auto'}`,
                            flexShrink: `${setting.fillHeight || setting.fillWidth ? 1 : 0}`,
                        }}
                    >
                        {setting.children?.map((child: ModuleDisplaySetting) => {
                            return renderModules([child]);
                        })}
                    </StyledFlexContainer>
                )
            } else {
                return (
                    <StyledFlexElement
                        key={setting.name}
                        style={{
                            width: determineWidthHeight(setting, 'width'),
                            // Max width is added additionally in the event of resize, 
                            // to cap the width from flex grow
                            maxWidth: !setting.fillWidth ? determineWidthHeight(setting, 'width') : '100%',
                            height: determineWidthHeight(setting, 'height'),
                            minWidth: `${setting.minWidth || 0}px`,
                            minHeight: `${setting.minHeight || 0}px`,
                            paddingTop: `${setting.paddingTop || 0}px`,
                            paddingRight: `${setting.paddingRight || 0}px`,
                            paddingBottom: `${setting.paddingBottom || 0}px`,
                            paddingLeft: `${setting.paddingLeft || 0}px`,
                            rowGap: `${setting.rowGap || 0}px`,
                            // This is added to allow element to shrink when resizing before wrapping
                            flex: `${setting.allowResize ? 1 : '0 1 auto'}`,
                            flexGrow: `${setting.fillHeight || setting.fillWidth ? 5 : '0 1 auto'}`,
                            flexShrink: `${setting.fillHeight || setting.fillWidth ? 1 : 0}`,
                        }}
                    >
                        {setting.render}
                    </StyledFlexElement>
                )
            }
        });
    }

	return (
        <> 
            {renderModules(settings)}
        </>
    );
};

export default Layout;
