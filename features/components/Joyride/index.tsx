import React from 'react';
import Joyride, { CallBackProps } from 'react-joyride';
import { JoyrideClassNames } from '@stonksfi/constants';

import JoyrideTooltip from './JoyrideTooltip';


const MyJoyride = () => {
    const [steps, setSteps] = React.useState([
        {
            title: 'Welcome to stonks.fi!',
            content: `We have pre-configured a dashboard for you to get started.`,
            locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
            placement: 'center',
            target: 'body',
        },
        {
            target: `.${JoyrideClassNames.METRIC_CARD}`,
            title: 'The Metric Card',
            content: `This is the core of stonks.fi, a simple metric which 
            shows you a glimpse of the market conditions today.`,
            spotlightPadding: 10,
            disableBeacon: true,
            placement: 'right',
            // disableScrolling: true,
        },
        {
            target: `.${JoyrideClassNames.METRIC_CARD_TITLE}`,
            title: 'The Metric Title',
            content: `This is the tldr of the metric, if you are 
            curious to learn more about the metric, feel free to use our tooltips.`,
            spotlightPadding: 10,
            disableBeacon: true,
            placement: 'right',
        },
        {
            target: `.${JoyrideClassNames.METRIC_CARD_UPCOMING}`,
            title: 'Upcoming Changes',
            content: `Here you can view the upcoming changes to the metric.`,
            placement: 'right',
            disableBeacon: true,
        },
        {
            target: `.${JoyrideClassNames.METRIC_CARD_DATA_SOURCES}`,
            title: 'News Sources',
            content: `If you want to find out more about the metric,
            you can click on the "Read More" button to view the news sources.`,
            placement: 'right',
            disableBeacon: true,
        },
        {
            target: `.${JoyrideClassNames.DASHBOARD_ACTIONABLES}`,
            title: 'Customisable',
            content: `When you are ready to customise your own dashboard, you can choose your own metrics here.`,
            disableBeacon: true,
        }
    ]);

	return (
        <Joyride
            steps={steps}
            tooltipComponent={JoyrideTooltip}
            continuous
            showProgress
            showSkipButton
            run
            scrollOffset={500}
            // callback={(data: CallBackProps) => {
            //     const { action, index, type } = data;

            //     if (action === 'close' || action === 'skip') {
            //         setSteps([]);
            //     }
            // }}
        />

	);
};

export default MyJoyride;
