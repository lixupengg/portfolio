import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useTrackResize } from '@stonksfi/hooks';
import { data } from './dummy';

const generateChartOptions = (data: any) => {
  return {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'AAPL'
    },
    series: [{
      type: 'candlestick',
      name: 'Price',
      data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  };
}

const StockChart = React.forwardRef((props?: any, ref?: any) => {
  const { width, height } = useTrackResize(ref);
  return (
      <HighchartsReact
        key={`${width}${height}`}
        highcharts={Highcharts}
        constructorType={'stockChart'}
        containerProps={{style: {width: '100%', height: '100%'}}}
        options={generateChartOptions(data)}
      />
  );
});

export default StockChart;