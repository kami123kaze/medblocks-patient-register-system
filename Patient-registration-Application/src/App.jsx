import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/index';
function App() {
  return (
    <Routes>
             <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
