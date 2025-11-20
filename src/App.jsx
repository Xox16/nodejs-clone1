import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CodeSection from "./components/CodeSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app app--${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <CodeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
