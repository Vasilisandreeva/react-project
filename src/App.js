import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import './App.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";

function App() {
  return (
        <Router>
            <div>
                <Link to={''}>Default page</Link>
                <br/>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <br/>

                <Route path={'/users'} component={Users}></Route>
                <Route path={'/posts'} component={Posts}></Route>
            </div>
        </Router>
  );
}

export default App;
