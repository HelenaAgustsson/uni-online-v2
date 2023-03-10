
import './App.css';
import Student from './components/Student';
import Menu from './components/Menu';
import Home from './components/Home';
import { NavLink, HashRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} ></ Route>
          <Route exact path="/student" element={<Student />} ></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
