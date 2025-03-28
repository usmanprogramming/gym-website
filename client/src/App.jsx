import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog"; 
import Trainers from "./pages/trainers/Trainers";
import About from "./pages/about/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Blog />
      <Trainers />
      <About />
    </div>
  );
}

export default App;
