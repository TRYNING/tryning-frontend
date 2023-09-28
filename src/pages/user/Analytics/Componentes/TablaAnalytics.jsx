
export function  TablaAnalytics({title, ejercicio1, ejercicio2}){
    return (

<div className="max-w-xs sm:max-w-screen-sm mx-auto mt-4">
          <div className="">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-md p-4">
              <thead>
                <tr>
                  <th className="px-2 sm:px-6 py-2 sm:py-2 text-center text-xs leading-4 font-medium text-white bg-[#ff1167] sm:bg-[var(--color-primary)] uppercase" colSpan="4">{title}</th>
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
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center sm:text-left whitespace-no-wrap">{ejercicio1}</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">50</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">10</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">500</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center sm:text-left whitespace-no-wrap">{ejercicio2}</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">40</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">12</td>
                  <td className="px-2 sm:px-6 py-2 sm:py-2 text-center whitespace-no-wrap">480</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
       ) }
