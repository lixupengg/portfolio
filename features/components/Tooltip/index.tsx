import React, { ReactNode } from 'react';

import { Whisper, Popover } from "rsuite";
import { StyledPopover, StyledTooltipTrigger } from "./style";

interface TooltipProps {
    children: React.ReactNode;
    title: string;
    placement?: "top" | "bottom" | "left" | "right";
    content: string;
}

const DefaultPopover = React.forwardRef(({ content, title, ...props }: any, ref: any) => {
    return (
      <Popover 
        ref={ref} 
        title={title} 
        arrow={false}
        {...props}
      >
            <StyledPopover ref={ref}>
                <p>
                    {content}
                </p>
            </StyledPopover>
        </Popover>
    );
});

const Tooltip = (props: TooltipProps) => {
    const { children, title, placement, content } = props;
    return (
        <Whisper
            trigger='hover'
            placement={placement}
            speaker={<DefaultPopover content={content} title={title} />}
            delayClose={200}
            enterable
        >
            <StyledTooltipTrigger>{children}</StyledTooltipTrigger>
        </Whisper>
    );
};

export default Tooltip;