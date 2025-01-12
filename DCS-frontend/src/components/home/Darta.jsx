import React, { useState } from 'react';
import { FaTh } from 'react-icons/fa';

const Darta = () => {
  const [tableData, setTableData] = useState([
    { no: 1, year: '79/80', dartaNo: '130', topic: 'lorem ipsum dolor sit amet ', sendOffice: 'lorem', date: '2081/03/07', remark: 'तुरुन्त', status: 'Pending' },
    { no: 2, year: '80/81', dartaNo: '793', topic: 'lorem ipsum dolor sit amet ', sendOffice: 'ipsum', date: '2081/05/13', remark: 'तुरुन्त', status: 'Pending' },
    { no: 3, year: '79/80', dartaNo: '130', topic: 'lorem ipsum dolor sit amet ', sendOffice: 'lorem', date: '2081/03/07', remark: 'तुरुन्त', status: 'Pending' },
    { no: 4, year: '80/81', dartaNo: '793', topic: 'lorem ipsum dolor sit amet ', sendOffice: 'ipsum', date: '2081/05/13', remark: 'तुरुन्त', status: 'Pending' },

  ]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2; 

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-h-full p-5">
      <div className='ButtonGroup flex '>
        <a href="#addDarta"><button className='bg-blue-500 text-white p-2 rounded-sm text-xs'>थप्नुहोस्</button></a>
       <a href="#getDarta"><button className='bg-blue-500 text-white p-2 ml-3 rounded-sm text-xs'>प्राप्त</button></a>
       <a href="#DartaPartibedan"><button className='bg-blue-500 text-white p-2 ml-3 rounded-sm text-xs'>दर्ता प्रतिवेदन खोज</button></a>
      </div>

      <div className='p-4 bg-slate-100 mt-4 shadow-sm'>
        <div className='w-100 mt-2'>
          <table className="w-full bg-slate-300">
            <tr className='h-10'>
              <th className='w-14 p-6  col-span-1'>
                <FaTh />
              </th>
              <th className='text-left p-5 col-span-7'>
              दर्ता सूचीकरण
              </th>
              <th className='col-span-1 ml-5'>
                <button className='bg-green-600 text-white text-xs p-2 rounded-md' onClick="#print">
                  Print
                </button>
              </th>
            </tr>
          </table>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300 text-xs">
          <thead>
            <tr className='bg-slate-300'>
            <th className="border px-4 py-2">क्र.स.</th>
            <th className="border px-4 py-2">आर्थिक वर्ष</th>
            <th className="border px-4 py-2">दर्ता नं</th>
            <th className="border px-4 py-2">बिषय</th>
            <th className="border px-4 py-2">पठाउने कार्यालय</th>
            <th className="border px-4 py-2">पठाउने कार्यालय ठेगाना पत्रको नेपाली मिति</th>
            <th className="border px-4 py-2">कैफियत</th>
            <th className="border px-4 py-2">कर्बाही भएको स्थिति</th>
            <th className="border px-4 py-2">कार्य</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.no}</td>
                  <td className="border px-4 py-2">{item.year}</td>
                  <td className="border px-4 py-2">{item.dartaNo}</td>
                  <td className="border px-4 py-2">{item.topic}</td>
                  <td className="border px-4 py-2">{item.sendOffice}</td>
                  <td className="border px-4 py-2">{item.date}</td>
                  <td className="border px-4 py-2">{item.remark}</td>
                  <td className="border px-4 py-2">{item.status}</td>
                  <td className="border px-4 py-2">
                    <a className='view bg-blue-500 text-white font-bold p-1'>View</a>
                    <a className='done bg-green-500 text-white font-bold p-1 ml-2'>Done</a>
                    <a className='delete bg-red-500 text-white font-bold p-1 ml-2'>Delete</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan="10">
                  कुनै रेकर्ड फेला परेन
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex w-100 h-10 mt-10">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`py-1 px-3 ml-2 rounded-lg font-bold ${
                currentPage === i + 1
                   ? 'bg-cyan-500 text-white'
                     : ' hover:bg-gray-400'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <div className="items-center mt-1 space-x-2">
            <button
              className={` text-gray-400 font-bold py-1 px-3 ml-2 rounded-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={`text-gray-400 font-bold py-1 px-3 rounded-sm ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Darta;
