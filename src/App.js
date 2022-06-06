import logo from './logo.svg';
import './App.css';
import DefectTracker from './components/DefectTracker/DefectTracker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
function App() {
  return (
    <>
      <Login></Login>
      <DefectTracker></DefectTracker>
    </>
  );
}

export default App;
