window.myBar = new Chart(document.getElementById('canvas'), {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','April','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
      datasets: [{
          label: 'All Seasons',
          data: [1,2,3],
          backgroundColor: '#0665A9'
        },
        {
          label: 'Planting Season',
          data: [2,3],
          backgroundColor: '#168D4B'
        },
        {
          label: 'Harvest Season',
          data: [1,2],
          backgroundColor: '#E5DB24'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          stacked: false,
        }],
        yAxes: [{
          stacked: true,
        }]
      },
      legend: {
        position:'top'
      },
      title: {
        display: true,
        text: 'Horizontal Floating Bars'
      }
    }
  });