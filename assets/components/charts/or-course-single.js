const ChartOrCourseSingleSummary = document.getElementById(
  "or-course-single-summary"
);

new Chart(ChartOrCourseSingleSummary, {
  type: "doughnut",
  data: {
    labels: ["On time", "Late", "Absent"],
    datasets: [
      {
        data: [9, 5, 1],
        borderColor: "white",
        backgroundColor: ["#0F0346", "#28EDFC", "#A447FD"],
        rotation: 144,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        labels: {
          value: {
            align: "end",
            anchor: "end",
            color: "black",
          },
        },
        font: {
          family: "roboto",
        },
        formatter: (value, context) => {
          const dataLabel = context.chart.data.labels[context.dataIndex];

          const datapoints = context.chart.data.datasets[0].data;
          const sum = (total, datapoint) => total + datapoint;
          const totalValue = datapoints.reduce(sum, 0);
          const percentage = ((value / totalValue) * 100).toFixed(1);

          return [`${dataLabel}`, `${percentage}%`];
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});
