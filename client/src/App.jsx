import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Trainers from "./pages/trainers/Trainers";

function App() {
  return (
    <div className="app">
      {/* <Header />
      <Home />
      <Blog /> */}
      <Trainers />
    </div>
  );
}

export default App;
