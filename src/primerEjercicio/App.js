import { useState } from 'react';
import './App.css';

const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const suma = () => setCount(count + 1)
  const resta = () => setCount(count - 1)
  const resetear = () => setCount(0)

  return {
    count,
    suma,
    resta,
    resetear,
  }
}


function App() {
  // const [count, setCount] = useState(0);
//  const { count, suma, resta, resetear } = useCount();
const counter1 = useCount(522);
const counter2 = useCount(22);

console.log("1", counter1.count)
console.log("2", counter2.count)

  return (


    <div className="App-header">

      <div>{counter1.count}</div>
      <button onClick={counter1.suma}>+</button>
      <button onClick={counter1.resta}>-</button>
      <button onClick={counter1.resetear}>0</button>


      <div>{counter2.count}</div>
      <button onClick={counter2.suma}>+</button>
      <button onClick={counter2.resta}>-</button>
      <button onClick={counter2.resetear}>0</button>

    </div>
  );
}

export default App;