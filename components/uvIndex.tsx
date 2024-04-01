import React from 'react';

export default function UvIndex() {
  // Function to determine the background color based on UV index
  const getColorByUVIndex = (uvIndex: number) => {
    if (uvIndex <= 2) {
      return 'bg-green-500';
    } else if (uvIndex <= 5) {
      return 'bg-yellow-400';
    } else if (uvIndex <= 7) {
      return 'bg-orange-500';
    } else if (uvIndex <= 10) {
      return 'bg-red-500';
    } else {
      return 'bg-purple-500';
    }
  };

  return (
    <section className="relative">
      <div className="container mx-auto mt-12 px-4">
        
        <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="p-8">
          <button className="container  flex justify-center items-center button-yellow">UV Index Table</button>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="w-1/6 py-2">UV Index</th>
                    <th className="w-1/6 py-2">Exposure Category</th>
                    <th className="w-2/6 py-2">Protection Recommendation</th>
                    <th className="w-2/6 py-2">Safety Precautions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-900">
                    <td className={`border px-4 py-2 ${getColorByUVIndex(1)}`}>1-2</td>
                    <td className="border px-4 py-2 bg-blue-100">Low</td>
                    <td className="border px-4 py-2 bg-blue-100">No protection required</td>
                    <td className="border px-4 py-2 bg-blue-100">
                      <ul className="list-disc list-inside">
                        <li>Minimal protection needed</li>
                        <li>You can safely stay outside using minimal sun protection</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="text-gray-900">
                    <td className={`border px-4 py-2 ${getColorByUVIndex(3)}`}>3-5</td>
                    <td className="border px-4 py-2 bg-blue-200">Moderate</td>
                    <td className="border px-4 py-2 bg-blue-200">Protection recommended</td>
                    <td className="border px-4 py-2 bg-blue-200">
                      <ul className="list-disc list-inside">
                        <li>Apply sunscreen with SPF 30 or higher → reapply every 2 hours</li>
                        <li>Wear protective clothing: long-sleeved shirt + pants, wide-brimmed hat, and sunglasses</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="text-gray-900">
                    <td className={`border px-4 py-2 ${getColorByUVIndex(6)}`}>6-7</td>
                    <td className="border px-4 py-2 bg-blue-100">High</td>
                    <td className="border px-4 py-2 bg-blue-100">Protection required</td>
                    <td className="border px-4 py-2 bg-blue-100">
                      <ul className="list-disc list-inside">
                        <li>Apply sunscreen with SPF 30 or higher → reapply every 2 hours</li>
                        <li>Wear protective clothing</li>
                        <li>Seek shade during midday hours when the sun is strongest (10AM – 4PM)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="text-gray-900">
                    <td className={`border px-4 py-2 ${getColorByUVIndex(9)}`}>8-10</td>
                    <td className="border px-4 py-2 bg-blue-200">Very High</td>
                    <td className="border px-4 py-2 bg-blue-200">Extra protection required</td>
                    <td className="border px-4 py-2 bg-blue-200">
                      <ul className="list-disc list-inside">
                        <li>Take extra precautions: apply sunscreen with SPF 30 or higher generously → reapply every 2 hours</li>
                        <li>Wear protective clothing</li>
                        <li>Avoid outdoor activities during midday hours (10AM – 4PM)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="text-gray-900">
                    <td className={`border px-4 py-2 ${getColorByUVIndex(12)}`}>11+</td>
                    <td className="border px-4 py-2 bg-blue-100">Extreme</td>
                    <td className="border px-4 py-2 bg-blue-100">Extra protection required</td>
                    <td className="border px-4 py-2 bg-blue-100">
                      <ul className="list-disc list-inside">
                        <li>Limit outdoor exposure: stay indoors or in the shade as much as possible</li>
                        <li>Use sunscreen with SPF 30 or higher → reapply every 2 hours</li>
                        <li>Wear protective clothing</li>
                        <li>Avoid outdoor activities during midday hours (10AM – 4PM)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* You can add any other content here */}
        </div>
      </div>
    </section>
  );
}
