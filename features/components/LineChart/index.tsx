import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { dummyData } from './dummy';

interface LineChartProps {
  data: {x: number, y: number}[];
  showLineChartOnly?: boolean;
  showDummy?: boolean;
}

const LineChart = React.forwardRef((props: LineChartProps, ref?: any) => {
  const { data, showLineChartOnly, showDummy } = props;
  const [key, setKey] = React.useState(0);
  const [width, setWidth] = useState('300');
  const [height, setHeight] = useState('300');
  
  /* =========================== Tracking width & height =========================== */
  // https://stackoverflow.com/questions/58222004/how-to-get-parent-width-height-in-react-using-hooks
  
  const handleResize = debounce((width: number, height: number) => {
    setWidth(width.toString());
    setHeight(height.toString());
  }, 0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      handleResize(event[0].contentBoxSize[0].inlineSize, event[0].contentBoxSize[0].blockSize);
    });

    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, [ref]);
  
  /* =========================== Data destructing =========================== */
  let categories; let seriesData;
  if (showDummy) {
    categories = dummyData.map(point => point.x);
    seriesData = dummyData.map(point => point.y);
  } else {
    categories = data.map(point => point.x);
    seriesData = data.map(point => point.y);
  }
  
  const options = {
    chart: {
      type: 'areaspline',
      // margin: showLineChartOnly ? [0, 0, 0, 0] : [50, 50, 70, 50], // [top, right, bottom, left]
      // margin: [0, 0, 0, 0],
      backgroundColor: 'transparent',
      animation: false,
    },
    title: {
      text: ''
    },
    xAxis: {
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          millisecond: '%b %e, %Y %H:%M:%S.%L',
          second: '%b %e, %Y %H:%M:%S',
          minute: '%b %e, %Y %H:%M',
          hour: '%b %e, %Y %H:%M',
          day: '%b %e, %Y',
          week: 'Week from %b %e, %Y',
          month: '%B %Y',
          year: '%Y'
        },
        categories,
      },
      labels: {
        format: '{value: %b %e, %Y}'
      },
      // Hide axis if we only show line chart
      visible: !showLineChartOnly,
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      // Hide axis if we only show line chart
      visible: !showLineChartOnly,
    },
    legend: {
      // Hide the label
      enabled: false,
    },
    series: [{
      name: 'My Data',
      data: seriesData,
      marker: {
        enabled: false,
      }
    }],
    tooltip: {
      pointFormat: '{point.x:%b %e, %Y}: <b>{point.y}</b>',
      headerFormat: '',
      hideDelay: 0,
    },
  };

  const handleChartUpdate = () => {
    setKey(key + 1);
  };

  return (
      <HighchartsReact
        // Force rerender when dimensions change
        key={`${width}${height}`}
        highcharts={Highcharts}
        options={options}
        containerProps={{style: {width: '100%', height: '100%'}}}
        callback={handleChartUpdate}
      />
  );
});

export default LineChart;
