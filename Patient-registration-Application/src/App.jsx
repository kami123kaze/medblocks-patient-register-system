import { Routes, Route, Navigate } from 'react-router-dom';
import { Dummy } from './pages/index';
function App() {
  return (
    <Routes>
           <Route path="/" element={<Dummy />} /> 
    </Routes>
  );
}

export default App;
