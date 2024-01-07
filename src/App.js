import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Home from './components/screens/Home';
import Nav from './components/includes/Nav';
import NoMatch from './components/screens/NoMatch';
import ProductsNav from './components/includes/ProductsNav';
import Products from './components/screens/Products';
import Fashion from './components/screens/Fashion';
import Electronics from './components/screens/Electronics';
import Students from './components/screens/students';
import StudentView from './components/screens/StudentView';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='products' element={<ProductsNav />}>
            <Route index element={<Products />} />
            <Route path='all' element={<Products />} />
            <Route path='fashion' element={<Fashion />} />
            <Route path='electronics' element={<Electronics />} />
          </Route> */}
          <Route path='/students' element={<Students />} />
          <Route path='Students/:name' element={<StudentView />} />
          <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
