import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed at the top */}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
