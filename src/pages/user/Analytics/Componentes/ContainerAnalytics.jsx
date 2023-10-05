import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export function ContainerAnalytics({title, ejercicios}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  
  const labels = ["SEMANA 1", "SEMANA 2", "SEMANA 3", "SEMANA 4"];
  const data = {
    labels,
    datasets: ejercicios.map(ejercicio => {
      return {
        label: ejercicio.nombre,
        data: labels.map(() => {
          return Math.random() * 200;
        }),
        borderColor: `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    })
  };
  
  return (
    <div className="mx-auto mb-20 max-w-3xl">
      <Line options={options} data={data}  />
    </div>
  );
}
