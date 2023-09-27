import { HeaderRoutine } from "../../../components/HeaderRoutine/HeaderRoutine";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const numeros =[ 12, 31,54, 767, 123, 65, 124]

const labels = ['SEMANA 1', 'SEMANA 2', 'SEMANA 3','SEMANA 4' ];
 const data = {
  labels,
  datasets: [
    {
      label: 'Kg',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Reps',
      data: labels.map(() => {return Math.random() * 200}),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default function PageAnalytics() {
  return (
    <div className="h-screen ">
      <main>
        <HeaderRoutine title="Progresiones" />

        <div className="max-w-xs sm:max-w-screen-sm mx-auto mt-4">
          <div className="overflow-x-scroll">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-md p-4">
              <thead>
                <tr>
                  <th className="px-2 sm:px-6 py-2 sm:py-2 text-center text-xs leading-4 font-medium text-white bg-[#ff1167] sm:bg-[var(--color-primary)] uppercase" colSpan="4">SERIE 1</th>
                </tr>
                <tr className="hidden sm:table-row">
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Ejercicio</th>
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider sm:table-cell">Peso</th>
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider sm:table-cell">Repeticiones</th>
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider sm:table-cell">Tonelaje</th>
                </tr>
                <tr className="sm:block md:hidden">
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Ejer</th>
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider sm:table-cell">Kg</th>
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider sm:table-cell">REP</th>
                  <th className="px-2 sm:px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider sm:table-cell">TON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center sm:text-left whitespace-no-wrap">Ejercicio 1</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">50</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">10</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">500</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center sm:text-left whitespace-no-wrap">Ejercicio 2</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">40</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">12</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">480</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mb-20">
        <Line options={options} data={data} />
        </div>
      </main>
    </div>
  );
}
