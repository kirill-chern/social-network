import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Nav />
        <div className="app-wraper-content">
          <Route path="/profile" render={ () => <Profile /> } />
          <Route path="/dialogs" render={ () => <Dialogs /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
          <Route path="/settings" render={ () => <Settings /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
