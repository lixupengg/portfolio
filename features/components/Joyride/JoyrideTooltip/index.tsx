import React from 'react';
import { Tooltip, Button } from '@stonksfi/components';
import Joyride, { TooltipRenderProps } from 'react-joyride';
import {
    StyledTooltipBody, 
    StyledTooltipContent,
    StyledTooltipTitle,
    StyledTooltipFooter,
} from './style';

/* This is used to overwrite the styling of the tooltip,
https://docs.react-joyride.com/custom-components */
const JoyrideTooltip = ({
    continuous,
    index,
    step,
    backProps,
    closeProps,
    primaryProps,
    tooltipProps,
    size,
    isLastStep
    }: TooltipRenderProps) => (
    <StyledTooltipBody {...tooltipProps}>
      {step.title && <StyledTooltipTitle>{step.title}</StyledTooltipTitle>}
      <StyledTooltipContent>{step.content}</StyledTooltipContent>
      <StyledTooltipFooter>
        {index > 0 && (
          <Button {...backProps} type="link">
            <span id="back">Back</span>
          </Button>
        )}
        {continuous && (
          <Button {...primaryProps}>
            <span id="next">
                {
                    isLastStep ? "Lets Go" 
                    : 
                    `Next (${index + 1}/${size})`
                }
            </span>
          </Button>
        )}
        {!continuous && (
          <Button {...closeProps}>
            <span id="close"> Close </span>
           </Button>
        )}
      </StyledTooltipFooter>
    </StyledTooltipBody>
  );

  export default JoyrideTooltip;