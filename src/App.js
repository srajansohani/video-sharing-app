import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react";
import {store} from './appRedux/store'

import SourceApp from "./routes";
import MainApp from "./MainApp";
function App() {
  return(
    <MainApp />
  )
}

export default App;
