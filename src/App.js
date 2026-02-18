import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import BooksInfo from "./pages/BooksInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">``
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
