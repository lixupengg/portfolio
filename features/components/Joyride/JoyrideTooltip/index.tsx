import React from 'react';
import { Tooltip, Button } from '@stonksfi/components';
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
    }: any) => (
    <StyledTooltipBody {...tooltipProps}>
      {step.title && <StyledTooltipTitle>{step.title}</StyledTooltipTitle>}
      <StyledTooltipContent>{step.content}</StyledTooltipContent>
      <StyledTooltipFooter>
        {index > 0 && (
          <Button {...backProps} id="back" type="secondary">
            Back
          </Button>
        )}
        {continuous && (
          <Button {...primaryProps} id="next">
            Next
          </Button>
        )}
        {!continuous && (
          <Button {...closeProps} id="close">
            Close
           </Button>
        )}
      </StyledTooltipFooter>
    </StyledTooltipBody>
  );

  export default JoyrideTooltip;