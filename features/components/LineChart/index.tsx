import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface LineChartProps {
  data: {x: number, y: number}[];
  showLineChartOnly?: boolean;
}

const LineChart = (props: LineChartProps) => {
  const { data, showLineChartOnly } = props;
  const categories = data.map(point => point.x);
  const seriesData = data.map(point => point.y);
  
  const [key, setKey] = React.useState(0);

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
        highcharts={Highcharts}
        options={options}
        containerProps={{style: {width: '100%', height: '100%'}}}
        callback={handleChartUpdate}
      />
  );
};

export default LineChart;
