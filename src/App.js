import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Register from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>
      </Routes>

    </Router>
  );
}


export default App;
