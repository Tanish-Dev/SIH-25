import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import FieldCapture from "./pages/FieldCapture";
import DMRVStudio from "./pages/DMRVStudio";
import Credits from "./pages/Credits";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App font-['Inter',sans-serif] bg-[#fafafa]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/field-capture" element={<FieldCapture />} />
            <Route path="/dmrv-studio" element={<DMRVStudio />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;