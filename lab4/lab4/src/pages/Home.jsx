import LightBulbToggle from "../components/BulbToggle";
import PasswordToggle from "../components/PasswordToggle";
import ItemManager from "../components/ItemManager";
import Counter from "../components/DynamicCounter";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Please scroll till the end.</h3>
      <LightBulbToggle />
      <PasswordToggle />
      <ItemManager />
      <Counter/>
    </div>
  );
}

export default Home;