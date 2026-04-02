import { useState } from "react";
import { motion } from "framer-motion";

export default function LightBulbToggle() {

  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn((prev) => !prev);
  };

  const bulbImage = isOn ? "/lighton.png" : "/lightoff.png";
  const statusMessage = isOn ? "Bulb is ON" : "Bulb is OFF";
  const buttonText = isOn ? "Turn OFF" : "Turn ON";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center space-y-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Light Bulb Controller</h1>

        <motion.img
          key={bulbImage}
          src={bulbImage}
          alt="Light Bulb"
          className="mx-auto w-40 h-40 object-contain"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <p className="text-lg font-medium">{statusMessage}</p>

        <button
          onClick={toggleBulb}
          className="w-full text-base font-semibold rounded-2xl bg-blue-600 text-white py-2 hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

