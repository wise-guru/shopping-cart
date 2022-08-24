import "./App.css";
import Navigation from "./components/Navigation";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  return (
    <div className="container">
      <Navigation />
      <RouteSwitch />
    </div>
  );
}

export default App;
