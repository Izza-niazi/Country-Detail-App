import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import DisplayDetails from "./pages/DisplayDetails";
import { ThemeProvider } from "./ThemeSwitch";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country/:name" element={<DisplayDetails />} />{" "}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
