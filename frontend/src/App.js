import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home';
import About from './about/about';
import Monitor from './monitor/monitor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={<Home />}/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="monitor" element={<Monitor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
