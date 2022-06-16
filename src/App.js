import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Receipt from "./components/Receipt";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
