import { BarChart } from '@mui/x-charts/BarChart';


const BarChartT = ({data}) => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: data.labels, title: 'Page Path' }]}
      series={[
        { data: data.seriesData.form_submit, label: 'Form Submit' },
        { data: data.seriesData.form_start, label: 'Form Start' }
      ]}
      categoryGapRatio={0.5}
      barGapRatio={0.1}
      width={500}
      height={300}
    />
  );
}

export default BarChartT;
