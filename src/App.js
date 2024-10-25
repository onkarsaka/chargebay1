import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/chargebayHome';
import HousingPage from './Pages/HousingPage';
import UnderConstructionPage from './Pages/UnderConstructionPage';
import DriversPage from './Pages/DriversPage';
import GetInTouch from './Pages/GetInTouch';
import Partners from './Pages/Partners';
import BussinessModelPage from './Pages/BussinessModelPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/underconstruction' element={<UnderConstructionPage />} />
        <Route path='/page2' element={<HousingPage />} />
        <Route path='/page3' element={<DriversPage />} />
        <Route path='/page4' element={<GetInTouch />} />
        <Route path='/page5' element={<Partners/>}/>
        <Route path='/page6' element={<BussinessModelPage/>}/>
      </Routes>
    </Router>
  );
}
// remove hashrouter if neccesary
export default App;
