import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app-wraper">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
