const ChartCourseCompletion = document.getElementById("course-completion");

new Chart(ChartCourseCompletion, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [20, 80],
        borderColor: "#92ADEF",
        backgroundColor: ["#718ED4", "#28EDFC"],
        rotation: -120
      },
    ],
  },
});
