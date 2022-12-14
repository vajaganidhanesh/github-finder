import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// custom components importation
import Home from './pages/Home'; 
import About from './pages/About';
import Filenot from './pages/Filenot';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen bg-slate-400'>
        <Navigation/>

        <main className='container mx-auto px-3 pb-12 '>
          
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/notfound' element={<Filenot/>} />
            <Route path='/*' element={<Filenot/>} />
          </Routes>
        </main>

        <Footer/>
      </div>

    </Router>
  );
}

export default App;
