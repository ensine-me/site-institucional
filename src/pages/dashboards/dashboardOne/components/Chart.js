import ApexCharts from "react-apexcharts"


function Chart(props) {

    console.log("PROPSSSSSS ", props.series.dados)

    console.log("TESTEEEEEEEE: ", props)

    const options = {
        xaxis: {
            categories: ['Jun'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        series: [{
            name: 'Matematica',
            data: [9]
        }, {
            name: 'Fisica',
            data: [10]
        }],
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