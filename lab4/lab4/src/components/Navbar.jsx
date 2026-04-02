import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Lab 4 </h2>

      <div>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        <Link to="/about" style={styles.link}>
          About
        </Link>

        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    background: "#333",
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;