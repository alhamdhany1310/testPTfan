import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Pages/detail';
import Pokemon from './Pages/pokemon';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Pokemon />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
