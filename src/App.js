import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import './App.css';
import Users from "./components/users/Users";

function App() {
  return (
      <Router>
        <div>
          <Users/>
          <Link to={'/users-page'}>to users</Link>
          <br/>
          <Link to={'/posts-page'}>to posts</Link>
          <br/>
          <Link to={'/comments-page'}>to comments</Link>

            <Route path={'/users-page'}>
              <h3>users</h3>
            </Route>
          <Route path={'/posts-page'}>
            <h3>posts</h3>
          </Route>
          <Route path={'/comments-page'}>
            <h3>comments</h3>
          </Route>
        </div>
      </Router>
  );
}

export default App;
