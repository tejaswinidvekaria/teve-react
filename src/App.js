import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='flex.flex-col.justify-between.h-screen'></div>
      <Navbar />
      {/* mx-auto is for auto margin
      px-3 is for little bit padding on each side
      pb-12 is for padding bottom */}
      <main className='container mx-auto px-3 pb-12'>Content</main>
      <Footer/>
    </Router>
    
  )
}

export default App;