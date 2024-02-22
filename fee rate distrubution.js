// Create a div element to hold the chart title and options
const titleDiv = document.createElement("div");
titleDiv.innerHTML = `<h1>Fee rate distribution</h1>
<p>View by: <a href="#" id="vSize">vSize</a> | <a href="#" id="count">Count</a> | <a href="#" id="linear">Linear</a> | <a href="#" id="logarithmic">Logarithmic</a></p>`;

// Create a canvas element to draw the chart using Chart.js library
const canvas = document.createElement("canvas");
canvas.id = "chart";

// Append the title div and the canvas to the body of the document
document.body.appendChild(titleDiv);
document.body.appendChild(canvas);

// Define the data for the chart as an array of objects
const data = [
  { range: ">300", count: 4026 },
  { range: "200-250", count: 9414 },
  { range: "160-180", count: 1547 },
  { range: "130-140", count: 6335 },
  { range: "110-120", count: 672 },
  { range: "90-100", count: 1476 },
  { range: "80-70", count: 4408 },
  { range: "70-80", count: 3902 },
  { range: "50-60", count: 11777 },
  { range: "30-35", count: 11353 },
  { range: "15-20", count: 98113 },
  { range: "8-10", count: 374965 },
  { range: "5-6", count: 44320191 },
  { range: "3-4", count: 21472427 },
  { range: "1-2", count: 12350590 }
];

// Define the labels and the values for the chart from the data array
const labels = data.map(item => item.range);
const values = data.map(item => item.count);

// Create a new chart instance using Chart.js
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels,
    datasets: [
      {
        label: "Count",
        data: values,
        backgroundColor:
          // Use green color for bars above or equal to 100, and red color for bars below
          values.map(value => (value >= 100 ? "green" : "red"))
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          type:
            // Use logarithmic scale for x-axis if the option is selected, otherwise use linear scale
            document.querySelector("a[href='#logarithmic']").classList.contains(
              "selected"
            )
              ? "logarithmic"
              : "linear"
        }
      ]
    }
  }
});

// Add event listeners to the options links to update the chart accordingly
const options = document.querySelectorAll("p > a");
options.forEach(option => {
  option.addEventListener("click", event => {
    event.preventDefault();
    // Remove the selected class from all options
    options.forEach(opt => opt.classList.remove("selected"));
    // Add the selected class to the clicked option
    option.classList.add("selected");
    // Update the chart based on the clicked option
    switch (option.id) {
      case "vSize":
        // TODO: implement this option
        break;
      case "count":
        // TODO: implement this option
        break;
      case "linear":
        // Change the x-axis scale to linear
        chart.options.scales.xAxes[0].type = "linear";
        chart.update();
        break;
      case "logarithmic":
        // Change the x-axis scale to logarithmic
        chart.options.scales.xAxes[0].type = "logarithmic";
        chart.update();
        break;
    }
  });
});


// Add more options to the x-axis
const options = {
    scales: {
      xAxes: [
        {
          type: "time", // Specify the type of scale (e.g., time, linear, logarithmic)
          // Add other options as needed
          // For example, you can set the position of the axis:
          position: "bottom",
          // Or customize the ticks:
          ticks: {
            // Your tick configuration here
          }
        }
      ]
    }
  };
  
  // Create a new chart instance using Chart.js
  const ctx = document.getElementById("chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Count",
          data: values,
          backgroundColor: values.map(value => (value >= 100 ? "green" : "red"))
        }
      ]
    },
    options: options
  });
  