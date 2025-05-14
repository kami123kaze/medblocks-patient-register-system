import { Routes, Route, Navigate } from 'react-router-dom';
import { Home,PatientList,Register } from './pages/index';
function App() {
  return (
    <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/register" element={<Register />} />
             <Route path="/patients" element={<PatientList />} />
    </Routes>
  );
}

export default App;
