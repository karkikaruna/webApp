import React, { useState } from "react";

export default function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Password Toggle</h2>

      <div style={styles.inputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={togglePassword} style={styles.button}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {password && (
        <p style={styles.message}>
          Password is {showPassword ? "Visible" : "Hidden"}
        </p>
      )}
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
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "250px",
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
  },
};