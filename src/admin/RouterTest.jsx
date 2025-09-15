import { HashRouter as Router, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import UseEffect from "./components/Useeffect";
import '../styles/admin.scss';
import PostDetails from "./components/PostDetails";

function Dashboard() {
  const location = useLocation();
  
  return (
    <div>
      <nav>
        <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>Users</Link>
        <Link to="/posts" className={location.pathname === '/posts' ? 'active' : ''}>Posts</Link>
      </nav>
      <div className="tab-content">
        <Outlet />
      </div>
      
    </div>
  );
}

function RouterTest() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="users" element={<p>Users content</p>} />
          <Route path="posts" element={<UseEffect />} />
          <Route path="users/:userId" element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterTest;