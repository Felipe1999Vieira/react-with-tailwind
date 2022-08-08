import {
  VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme,
} from 'victory';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 14250 },
  { quarter: 6, earnings: 19000 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 14250 },
  { quarter: 10, earnings: 19000 },
];

function VerticalBar({ data }) {
  const { settings } = data;
  const { tabs } = data;
  const { title } = data;
  const { subtitle } = data;
  console.log(subtitle);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={tabs[0].data}
          x="bar"
          y="value"
        />
      </VictoryChart>
    </div>
  );
}

export default VerticalBar;
