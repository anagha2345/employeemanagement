
import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import PagenotFound from './components/PagenotFound';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Admin/>}></Route>
        <Route path='add' element={<Add/>} ></Route>
        <Route path='edit/:id' element={<Edit/>}></Route>
        <Route path='view/:id' element={<View/>}></Route>
        <Route path={'*'} element={<PagenotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
