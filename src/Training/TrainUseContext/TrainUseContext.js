import { useState, useContext, createContext } from "react";

import Content from "./Content";

export const ThemeContext = createContext();
const TrainUseContext = () => {
  const [theme, setTheme] = useState("dark");
  const ChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={ChangeTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};
export default TrainUseContext;
