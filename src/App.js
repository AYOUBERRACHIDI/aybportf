import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import './i18n';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Suspense fallback="Loading...">
      <Router>
        <div className={`min-h-screen transition-colors duration-500 ease-in-out ${darkMode ? 'dark bg-bgDark text-textPrimaryDark' : 'bg-bgLight text-textPrimary'}`}>
          <Navbar darkMode={darkMode} />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Header darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;





// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ThemeToggle from "./components/ThemeToggle";
// import Loader from "./components/Loader";
// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   return (
//     <Router>
//       {loading ? (
//         <Loader darkMode={darkMode} onFinish={() => setLoading(false)} />
//       ) : (
//         <div
//           className={`min-h-screen transition-colors duration-500 ease-in-out ${
//             darkMode
//               ? "dark bg-bgDark text-textPrimaryDark"
//               : "bg-bgLight text-textPrimary"
//           }`}
//         >
//           <Navbar darkMode={darkMode} />
//           <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//           <Header darkMode={darkMode} />
//           <About darkMode={darkMode} />
//           <Skills darkMode={darkMode} />
//           <Projects darkMode={darkMode} />
//           <Contact darkMode={darkMode} />
//           <Footer darkMode={darkMode} />
//         </div>
//       )}
//     </Router>
//   );
// }

// export default App;