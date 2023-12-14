import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';

function App() {
  return (
  <GithubProvider>
    <Router>
      <div className='flex.flex-col.justify-between.h-screen'></div>
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          {/* if you are using react router version 5 then you should use component instead of element but as of now we are using 6 */}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  </GithubProvider> 
  )
}

export default App;