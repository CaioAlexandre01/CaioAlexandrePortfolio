import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useState } from "react";

const SwitchDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="flex items-center">
      <button onClick={toggleDarkMode} className="text-2xl">
        {darkMode ? <IoIosMoon /> : <IoSunny className="text-white" /> }
      </button>
    </div>
  );
};

export default SwitchDarkMode;
