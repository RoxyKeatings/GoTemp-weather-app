import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
