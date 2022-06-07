import logo from './logo.svg';
import './App.css';
import DefectTracker from './components/DefectTracker/DefectTracker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import AddDefect from './components/AddDefect/AddDefect';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/dashboard" element = {<DefectTracker/>}/>
        <Route path = "/adddefect" element = {<AddDefect/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
