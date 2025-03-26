import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog"

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Blog />
    </div>
  );
}

export default App;
