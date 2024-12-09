import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Products from "./components/Products";
import Contact from './components/Contact';
import About from './components/About';
import ShowProduct from './components/ShowProduct';
import { ProductProvider } from "./Contexts/ProductContexts"
import ArticlesList from './components/Article/ArticlesList';
import ArticleProvider from './Contexts/articles/ArticleProvider';




function App() {
  return (
    <>
      
      <Router>
        <ProductProvider>
          <ArticleProvider>
              <Navbar/>
              <Routes>
              
                <Route path='/' element={<Products/>}/>
                <Route path='/product/:id' element={<ShowProduct/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<ArticlesList/>}/>
                <Route path='/contact' element={ <Contact/>}/>

              </Routes>
            </ArticleProvider>
        </ProductProvider> 
      </Router>
    </>
  );
}

export default App;
