import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer.js";
import Login from "./components/Login";
import CommentSection from "./components/CommentSection";
import NewPoemForm from './components/NewPoemForm';


function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/poem/comments" component={CommentSection}/>

        <Route path="/poem/new" component={NewPoemForm}/>

        <Route path="/poem" component={MainContainer} />

        <Route path="/" component={Login} />

      </Switch>
    </div>
  );
}

export default App;