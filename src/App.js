import "./styles.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import History from "./Components/History/History";
import Climb from "./Components/Climb/Climb";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <History />
      <Climb />
      <Footer />
    </div>
  );
}
