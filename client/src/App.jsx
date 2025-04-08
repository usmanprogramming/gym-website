import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Trainers from "./pages/trainers/Trainers";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Blog />
      <Trainers />
      <About />
      <Services />
    </div>
  );
}

export default App;
