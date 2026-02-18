import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Booksinfo from "./pages/Booksinfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={Books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
