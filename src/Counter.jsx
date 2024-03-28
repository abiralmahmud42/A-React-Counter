import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count > 0) { 
          setCount(count - 1);
        }
      };
    const reset = () => {
        setCount(0);
    }
    const increment = () => {
        setCount(count+1);
    }

    return(
          <div className="main">
              <p className="count">{count}</p>
              <button className="decrement" onClick={decrement}>Decrement</button>
              <button className="decrement" onClick={reset}>Reset</button>
              <button className="decrement" onClick={increment}>Increment</button>
          </div>
    );
}

export default Counter