import {
  BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      <Router>
        <div>
          <Link to={'/'}>to default page</Link>
          <br/>
          <Link to={'/users'}>to users</Link>
          <br/>
          <Link to={'/posts'}>to posts</Link>
          <br/>
          <Link to={'/comments'}>to comments</Link>

            <Route path={'/users'}>
              <h3>users</h3>
              <Users/>
            </Route>
          <Route path={'/posts'}>
            <h3>posts</h3>
              <Posts/>
          </Route>
          <Route path={'/comments'}>
            <h3>comments</h3>
            <Comments/>
          </Route>
        </div>
      </Router>
  );
}

export default App;
