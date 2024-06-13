import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IBarChartProps {
  title: string;
  data: ChartData<'bar'>;
  styles?: ChartOptions<'bar'>;
}

const BarChart = ({ title, data, styles }: IBarChartProps) => {
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as 'top' | 'bottom' | 'left' | 'right' | 'center' | 'chartArea',
        labels: {
          color: '#fff',  // Corrected color to a valid hex value
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
        barPercentage: 10.2, // Adjust the width of the bars
        categoryPercentage: 10.9, // Adjust the space between the categories
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
    <div className='flex justify-center items-center w-full py-4' style={{ height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
