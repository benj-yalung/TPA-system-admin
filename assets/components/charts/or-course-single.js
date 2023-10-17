const ChartOrCourseSingleSummary = document.getElementById(
  "or-course-single-summary"
);

new Chart(ChartOrCourseSingleSummary, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [20, 80],
        borderColor: "white",
        backgroundColor: ["#718ED4", "#28EDFC"],
        rotation: -120,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
  },
});
