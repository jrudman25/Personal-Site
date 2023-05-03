import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Contact from './Contact'
import './App.css';

function App() {
  return (

      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
          <Route
              path="*"
              element={<Home />}
          />
        </Routes>
      </Router>
  );
}

export default App;
