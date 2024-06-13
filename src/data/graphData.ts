import { ChartData } from "chart.js";

export const barGraphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Donations',
            data: [650, 590, 820, 881, 956, 455, 540, 850, 200, 150, 450, 989]
        }
    ]
};
export const GraphicalStyle = {
    backgroundColor: 'primary',
    borderColor: '#FFA500',
    borderWidth: 1,
    hoverBackgroundColor: '#FFA50082',
    hoverBorderColor: '#FFA50012',
    borderRadius: 15, 
    barThickness: 20, 
}
  
export const lineGraphData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40], 
      backgroundColor: ['#fff', 'blue', 'green'], 
      borderColor: '#FFA500',  
      borderWidth: 1,
      pointBackgroundColor: '#FFA500', 
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FFA500',
      fill: true,
    }
  ]
};
  