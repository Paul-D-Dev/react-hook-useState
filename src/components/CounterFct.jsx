import React, { useState } from 'react';

function CounterHooks() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);    

  const under = (count) => {
      if (count > 0) {
          return count - 1
      }
      return 0
  }

  return (
    <div>
        <h1>Function Counter with hook</h1>
        <input type="number" value={count} onChange={e => setCount(e.target.value)}/>
        <p>Le compteur est  à : {count} </p>
        <button onClick={() => setCount((count + 1))}>
            +1
        </button>
        <button onClick={() => setCount(under(count))}>
            -1
        </button>
    </div>
  );
}

export default CounterHooks;