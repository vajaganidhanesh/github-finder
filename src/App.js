import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navigation/>

        <main>Content</main>

        <Footer/>
      </div>

    </Router>
  );
}

export default App;
