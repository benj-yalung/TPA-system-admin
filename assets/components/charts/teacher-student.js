/**
 * Constants, Variables, and Functions
 */
// Lower and upper bounds for the arrays
const smallestValue = 12;
const largestValue = 144;

// Generate an array of 12 random integers within the smallestValue and largestValue
const randomData = (min, max) =>
  Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );

// Lower and upper limits of the y-axis
const yLower = () =>
  Math.min(Math.min(...randomData(smallestValue, largestValue)) - 10) === 0
    ? 0
    : Math.min(Math.min(...randomData(smallestValue, largestValue)) - 10) === 0;

const yUpper = Math.max(...randomData(smallestValue, largestValue)) + 10;

/**
 * Chart Component
 */
const ChartTeacherStudent = document.getElementById("teacher-student");

new Chart(ChartTeacherStudent, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Teacher",
        data: randomData(smallestValue, largestValue),
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: "hsla(188, 79%, 55%, 1)",
        backgroundColor: "hsla(188, 79%, 55%, 0.5)",
        tension: 0.1,
      },
      {
        label: "Student",
        data: randomData(smallestValue * 40, largestValue),
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
        borderColor: "hsla(199, 95%, 76%, 1)",
        backgroundColor: "hsla(199, 95%, 76%, 0.5)",
        tension: 0.1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        suggestedMin: yLower(),
        suggestedMax: yUpper,
      },
    },
  },
});
