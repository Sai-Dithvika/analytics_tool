import { Chart } from "react-google-charts";

export const options = {
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  // backgroundColor: "#81d4fa",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

function MapChartT({ data }) {

  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default MapChartT;
