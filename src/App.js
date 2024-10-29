// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Use this ↑ for deploying on AWS (uncomment)
import { HashRouter as Router, Route ,Routes } from 'react-router-dom';
// Use this ↑ for deploying on GitHuB (uncomment)
import './App.css';
import HomePage from './Pages/chargebayHome';
import MultiFamilyHostPage from './Pages/MultiFamilyHostPage';
import UnderConstructionPage from './Pages/UnderConstructionPage';
import DriversPage from './Pages/DriversPage';
import GetInTouch from './Pages/ContactPage';
import ResellerPage from './Pages/ResellerPage';
import BussinessModelPage from './Pages/BussinessModelPage';
import CommercialHostPage from './Pages/CommercialHostPage';
import QAPage from './Pages/QAPage';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/underconstruction' element={<UnderConstructionPage />} />
        <Route path='/page1' element={<HomePage />} />
        <Route path='/page2' element={<MultiFamilyHostPage />} />
        <Route path='/page3' element={<DriversPage />} />
        <Route path='/page4' element={<GetInTouch />} />
        <Route path='/page5' element={<ResellerPage/>}/>
        <Route path='/page6' element={<BussinessModelPage/>}/>
        <Route path='/page7' element={<CommercialHostPage/>}/>
        <Route path='/page8' element={<QAPage/>}/>
        <Route path='/page9' element={<ProductsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
