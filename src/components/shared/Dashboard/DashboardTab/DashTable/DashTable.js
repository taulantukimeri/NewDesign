import React from 'react';
import '../../../../../styles/Dashboard/DashboardTad/DashTable/DashTable.scss'


const Table = () => {
  const tableData = [
    {name: 'John Anton', drink: 'espresso', amount:'3 Pieces', date: '12 Feb 2023' },
    {name: 'Farrel Putra', drink: 'espresso', amount:'2 Pieces', date: ' 12 Feb 2023' },
    {name: 'Bob Johnson', drink: 'late', amount:'5 Pieces', date: '14 Feb 2023' },
  ];

  return (
    <table className='purchase-history-table'>
      <thead>
        <tr>
          <th>Costumer Name</th>
          <th>Drink</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.drink}</td>
            <td>{row.amount}</td>
            <td>{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
