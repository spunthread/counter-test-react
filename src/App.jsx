import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    const now = Date.now().toString();
    setCounters([...counters, now]);
  };

  const removeCounter = (key) => setCounters(counters.filter((ctr) => ctr !== key));

  return (
    <>
      <header className="header">
        <button onClick={addCounter}>Add Counter</button>
      </header>
      {counters.length === 0 && <p>Click on Add Counter</p>}
      <section className="section">
        {counters.map((ctr) => (
          <Counter
            id={ctr}
            key={ctr}
            onDestroy={removeCounter}
          />
        ))}
      </section>
    </>
  );
}

export default App;
