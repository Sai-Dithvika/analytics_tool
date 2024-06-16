import { PieChart } from "@mui/x-charts/PieChart";


const PieChartT = ({data}) => {
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={400}
      height={200}
    />
  );
}

export default PieChartT;