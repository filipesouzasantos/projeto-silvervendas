import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from 'react-apexcharts';
import { saleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/resquests';
type SeriesData = {
    name: string,
    data: number[]
}
type ChartData = {
    labels: {
        categories: string[]
    },
    series: SeriesData[]
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then(response => {
            const data = response.data as saleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.visited/x.deals, 1));
            

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Sucesso",
                        data: mySeries
                    }
                ]
            });
        })
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Charts
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;


