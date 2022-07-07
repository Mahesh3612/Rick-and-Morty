
import './App.css';
import {Route,Routes} from "react-router-dom"
import { Charecters } from './component/getData/getData';
import { Detail } from './component/detailPage/detail';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/' element={<Charecters/>}/>
    </Routes>

    </div>
  );
}

export default App;
