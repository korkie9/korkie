//Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//Layout
import Footer from './layout/Footer'
import NavMenu from './layout/Navbar'
//React
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Login from './pages/Login'


function App() {

  return (
    <div className="App">
                 
      <BrowserRouter>
      <NavMenu />   
          <Switch>
          <Route component={Home} path="/Home" exact />
          <Route component={About} path="/About" exact />
          <Route component={Experience} path="/Experience" exact />
          <Route component={Contact} path="/Contact" exact />
          <Route component={Admin} path="/Admin" exact />
          <Route component={Login} path="/Login" exact />
          <Route path="/" exact>
            <Redirect to={'/Home'} exact />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
