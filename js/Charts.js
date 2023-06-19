
const ctx = document.getElementById('chart-potenial');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['4%', '94%'],
        datasets: [{
            label: '%',
            // input data hear !!
            data: [4, 96],
            borderWidth: 2,
            backgroundColor: [
                'rgba(167, 183, 240,0.8)',
                'rgba(66, 105, 245,0.8)'
            ],
        }]
    },
});
// for chart potenial-2 
const chart2 = document.getElementById('chart-potenial-2');
new Chart(chart2, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '%',
            // input data hear !!
            data: [10, 90],
            borderWidth: 2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(210, 9, 53, 0.8)',
            ],
        }]
    },
});
//Avreg chart
const Averg = document.getElementById('Average-grade');
new Chart(Averg, {
    type: 'line',
    data: {
        labels: ['Spt', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Average grade',
            // input data hear !!
            data: [75, 90, 80, 77, 66, 96, 89, 67, 55],
            borderWidth: 4,
            backgroundColor: [
                'rgba(236, 66, 66,0.8)'],
            fill: true,
            showLine: true,
        },]
    }, options: {
        indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                suggestedMax: 125
            }
        },
    }
});
//Avreg chart2
const Averg_marks = document.getElementById('Afreg-fild');
new Chart(Averg_marks, {
    type: 'radar',
    data: {
        labels: ["Exam", "Quizzes", "Homework", "Lab work", "Assigments"],
        datasets: [{
            label: 'Average grade',
            // input data hear !!
            data: [75, 90, 80, 77, 90],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
        },]
    }, options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 10,
                suggestedMax: 100
            }
        }
    }
});
//topics chart[Arabic , Islamic , math  ....]
const topics = document.getElementById('topics-chart');
new Chart(topics, {
    type: 'bar',
    data: {
        labels: ["Arabic", "Islamic", "English", "Math", "ICT", "MPA", "Chemistry", "projects", "Prod design"],
        datasets: [{
            label: ["Potenial Grades"],
            axis: 'y',
            // input data hear !!
            data: [95, 99, 89, 98, 98, 92, 92, 95, 90, 90, 85],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(201, 203, 207, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(201, 203, 207, 0.5)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1

        },]
    }, options: {
        indexAxis: 'y',
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 10,
                suggestedMax: 100
            },

        }
    }
});
