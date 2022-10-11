import PokeState from "./context/Pokemon/PokeState";
import RoutesComp from "./routs/Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PokeState>
        <RoutesComp />
      </PokeState>
    </div>
  );
}

export default App;
