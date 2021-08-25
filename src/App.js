import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route } from "react-router-dom"
import MainContainer from "./components/MainContainer.js"
import Login from "./components/Login"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/home">
          <MainContainer />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
