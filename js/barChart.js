let myChart = document.getElementById('altitudeChart').getContext('2d');
var xValues = [900,1000,1100,1200,1300,1400];
var yValues = [900,1000,1100,1200,1300,1400];
var barColors = ['#FFF'];

new Chart(myChart, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Crop Altitude',
      backgroundColor: barColors,
      data: yValues, 
      borderWidth: 1,
     hoverOffset: 2,
     hoverBorderColor: '#fff',
     barPercentage: 1.0,
    categoryPercentage: 1.0,
    }]
  },
      options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    },

});

