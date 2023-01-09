import '../styles/App.css'
import ForSale from '../pages/ForSale.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainNavigation from './layout/MainNavigation';
import NewSale from '../pages/NewSale'
import Favorite from '../pages/Favorite'
import Error from '../pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route exact path='/' element={<ForSale />} />
          <Route path='/newSale' element={<NewSale />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<Error to="/error" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
