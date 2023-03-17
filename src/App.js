import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  useRoutes
} from "react-router-dom";
import Login from './login/login';
import Upload from "./upload/upload";
import fatcaReducer from "./store/fatcaReducer";

function App() {
  
  const routes = useRoutes([
    { path: '/', element: <Upload /> },
  ]);

  return routes;

}
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
