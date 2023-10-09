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
import { MUSCLE_COLORS } from "@common/constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export function ContainerAnalytics({title, data}) {
  console.log(data)
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

  const labels = data.map(semana => {
    return semana.title
  })

  
  const datas = {
    labels,
    datasets: data.map(semana => {

      
      return {
        label: "aaa",
        data: semana.ejercicios.map((ejercicio)=> {
          return ejercicio.info.peso
        }),
        borderColor: `rgb(255, ${Math.random() * 200}, 128)`,
        backgroundColor: `rgb(255, ${Math.random() * 200}, 128)`,
      }
    })
  };
  
  return (
    <div className="mx-auto mb-20 max-w-3xl">
      <Line options={options} data={datas}  />
    </div>
  );
}
