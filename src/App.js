import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PropTypes from "prop-types";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Nav />
        <div className="app-wraper-content">
          <Route path="/profile" render={ () => <Profile state={props.state.profileComponent} /> } />
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsComponent} /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
          <Route path="/settings" render={ () => <Settings /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  state: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default App;
