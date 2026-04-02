import React, { useState } from "react";

function Counter() {
  
  const [count, setCount] = useState(0);


  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
        <button style={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;