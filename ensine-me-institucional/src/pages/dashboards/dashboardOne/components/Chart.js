import ApexCharts from "react-apexcharts"


function Chart() {

    const options = {
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        series: [{
            name: 'Matematica',
            data: [23, 75, 12, 44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Fisica',
            data: [43, 54, 64, 76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Quimica',
            data: [43, 94, 32, 35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
        ],
        dataLabels: {
            enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },

    }





    return (
        <ApexCharts
            options={options}
            series={options.series}
            type='bar'
            height={500}
            width={500}
        />
    )
}

export default Chart;