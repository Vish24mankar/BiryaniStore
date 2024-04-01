import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navcomponent from './Components/Navcomponent';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Services from './Components/Services';
import MenuDetails from './Components/MenuDetails';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import Login from './Components/Login';
import Sign_up from './Components/Sign_up';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './Store/store';
import PrivateRoute from './Components/PrivateRoute';
import { Component } from 'react';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
            <Navcomponent />
              <Routes>
                  <Route path='/' element={<Home /> } />
                  <Route path='home' element={<PrivateRoute component={<Home /> } />} />
                  <Route path='about' element={<About /> } />
                  {/* <Route path='gallery' element={<Gallery /> } /> <MenuDetails />*/}
                  <Route path='services' element={<Services /> } />
                  <Route path='contact' element={<Contact /> } />
                  <Route path='feedback1' element={<Feedback /> } />
                  <Route path='menu' element={<PrivateRoute component={<MenuDetails />} /> } />
                  <Route path='login' element={<Login /> } />
                  <Route path='sign_up' element={<Sign_up /> } />
                  <Route path='gallery' 
                  element={<PrivateRoute component={<Gallery />} />} />
            </Routes>
           <Footer />
        </BrowserRouter>
    </div>
    </Provider>
    
  );
}

export default App;
