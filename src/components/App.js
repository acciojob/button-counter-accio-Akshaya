import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count + 1);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} {count === 1 ? "time" : "times"}</p>
        <button onClick={handleIncrement}>Click me</button>
        
    </div>
  )
}

export default App
