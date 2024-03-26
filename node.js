const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("chart").getContext("2d");
  
    // Define the data for the chart
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
  
    // Extract labels and values from data
    const labels = data.map(item => item.range);
    const values = data.map(item => item.count);
  
    // Create initial chart
    let chart = createChart(ctx, labels, values);
  
    // Add event listeners to options links
    const options = document.querySelectorAll("p > a");
    options.forEach(option => {
      option.addEventListener("click", event => {
        event.preventDefault();
        options.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
        updateChart(option.id);
      });
    });
  
    // Function to create chart
    function createChart(ctx, labels, values) {
      return new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Count",
            data: values,
            backgroundColor: values.map(value => (value >= 100 ? "green" : "red"))
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: "linear" // Default x-axis scale
            }]
          }
        }
      });
    }
  
    // Function to update chart based on option selected
    function updateChart(optionId) {
      switch (optionId) {
        case "vSize":
          // Implement this option if needed
          break;
        case "count":
          // Implement this option if needed
          break;
        case "linear":
          chart.options.scales.xAxes[0].type = "linear";
          chart.update();
          break;
        case "logarithmic":
          chart.options.scales.xAxes[0].type = "logarithmic";
          chart.update();
          break;
      }
    }
  });
  
  
  const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define the chart data
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

// Define an API endpoint to serve chart data
app.get("/chartData", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("chart").getContext("2d");
  
    // Fetch chart data from backend
    fetch("/chartData")
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item.range);
        const values = data.map(item => item.count);
        createChart(ctx, labels, values);
      })
      .catch(error => console.error("Error fetching chart data:", error));
  
    // Rest of the script remains the same...
  });
  