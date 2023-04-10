import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <section className="weather">
        <Weather defaultcity="Bogota" />
      </section>
      <footer className="codeInfo">
        <a
          href="https://github.com/zaicampo/new-weather-app-2nd"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        <span>{""} by Zaira Campo</span>
      </footer>
    </div>
  );
}

export default App;
