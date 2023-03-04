import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTrackResize } from '@stonksfi/hooks';
import { dummyData } from './dummy';

interface LineChartProps {
  data: {x: number, y: number}[];
  showLineChartOnly?: boolean;
  showDummy?: boolean;
}

const LineChart = React.forwardRef((props: LineChartProps, ref?: any) => {
  const { data, showLineChartOnly, showDummy } = props;
  const [key, setKey] = React.useState(0);

  const { width, height } = useTrackResize(ref);
  
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
