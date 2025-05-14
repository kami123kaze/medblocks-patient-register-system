import { Routes, Route, Navigate } from 'react-router-dom';
import { Home,PatientList } from './pages/index';
function App() {
  return (
    <Routes>
             <Route path="/" element={<Home />} />
              <Route path="/patients" element={<PatientList />} />
    </Routes>
  );
}

export default App;
