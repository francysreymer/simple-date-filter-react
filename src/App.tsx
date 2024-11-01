import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([{id: 1, myDate: '11/01/2024', description: 'test description 1', amount: 4},{id: 2, myDate: '11/02/2024', description: 'test description 2', amount: 4},{id: 3, myDate: '11/03/2024', description: 'test description 3 ', amount: 4},{id: 4, myDate: '11/04/2024', description: 'test description 4', amount: 4}]);
  const [dateStart, setDataStart] = useState('');
  const [dateEnd, setDataEnd] = useState('');

  const filterByDate = () => {
    const auxDateStart = new Date(dateStart).getTime();
    const auxDateEnd = new Date(dateEnd).getTime();

    let filtered = data.filter((product)=>{
      let productDate = new Date(product.myDate).getTime();
      return (productDate>= auxDateStart && productDate<= auxDateEnd);
    });
    setData(filtered);
  }

  return (
    <>

      <div>
        <div> Filter by date</div>
        <input type="date" name="date_start" id="date_start" onChange={(e) => setDataStart(e.target.value)} />
        <input type="date" name="date_end" id="date_end" onChange={(e) => setDataEnd(e.target.value)} />
        <button type="button" onClick={filterByDate}>Filter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default App
