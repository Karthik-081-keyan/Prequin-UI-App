import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InvestorList from "./components/InvestorList";
import "bootstrap/dist/css/bootstrap.min.css";
import InvestorDetail from "./components/InvestorDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvestorList />} />
        <Route path="/investor/:name" element={<InvestorDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
