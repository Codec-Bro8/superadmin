import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { lineGraphData } from '@/data/graphData';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface ILineChartProps {
  title: string;
  data: ChartData<'line'>;  
  styles?: ChartOptions<'line'>;  
}

const LineChart = ({ title, data, styles }: ILineChartProps) => {
  const defaultOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          color: '#fff',
          font: {
            size: 14,
            family: 'Poppins',
          }
        }
      },
      title: {
        display: true,
        text: title,
        color: '#fff',
        font: {
          size: 20,
          family: 'Poppins',
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#1C1B1B',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'transparent',
        borderWidth: 1,
        titleFont: {
          size: 16,
          family: 'Poppins',
        },
        bodyFont: {
          size: 14,
          family: 'Poppins',
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
          font: {
            size: 14,
            family: 'Poppins',
          }
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
          font: {
            size: 14,
            family: 'Poppins',
          }
        }
      }
    }
  };

  const options = {
    ...defaultOptions,
    ...styles
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
