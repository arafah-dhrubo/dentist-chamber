import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Pages/Header/Header'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Cart from './components/Pages/Cart/Cart'
import Contact from './components/Pages/Contact/Contact'
import NotFound from './components/Pages/NotFound'
import Footer from './components/Pages/Footer/Footer'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'
import { AuthProvider } from './context/AuthProvider'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Service from './components/Pages/Service/Service'
import { useEffect } from 'react'
import Checkout from './components/Pages/Checkout/Checkout'

function App () {
  const [cartItems, setCartItems] = useState([])
  const [services, setServices] = useState([])

  //Adding services to the cart
  const handleAddServices = service => {
    const serviceExist = cartItems.find(item => item.id === service.id)
    if (serviceExist) {
      setCartItems(
        cartItems.map(item =>
          item.id === service.id
            ? { ...serviceExist, quantity: serviceExist.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...service, quantity: 1 }])
    }
  }

  //Removing services from the cart
  const handleRemoveServices = service => {
    const serviceExist = cartItems.find(item => item.id === service.id)
    if (service.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== service.id))
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === service.id
            ? { ...serviceExist, quantity: serviceExist.quantity - 1 }
            : item
        )
      )
    }
  }

  //Total Added services
  const totalServices = cartItems
    .map(item => item.quantity)
    .reduce((prev, next) => prev + next, 0)

  //Total Added Price
  const totalPrice = cartItems
    .map(item => item.quantity * item.price)
    .reduce((prev, next) => prev + next, 0)

  //Clearing all the items of cart
  const handleCartClear = () => setCartItems([])

  //Fetching data from fakedb
  useEffect(() => {
    fetch('fakedb.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='App'>
      {/* context */}
      <AuthProvider>
        <Router>
          <Header totalServices={totalServices} />
          <Switch>
            <Route path='/' exact>
              <Home handleAddServices={handleAddServices} services={services} />
            </Route>

            <Route path='/home'>
              <Home handleAddServices={handleAddServices} services={services} />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            {/* private route */}
            <PrivateRoute path='/cart'>
              <Cart
                cartItems={cartItems}
                handleAddServices={handleAddServices}
                handleRemoveServices={handleRemoveServices}
                handleCartClear={handleCartClear}
                totalServices={totalServices}
                totalPrice={totalPrice}
              />
            </PrivateRoute>

            {/* private route */}
            <PrivateRoute path='/checkout'>
              <Checkout />
            </PrivateRoute>

            {/* private route */}
            <PrivateRoute path='/service/:id'>
              <Service
                services={services}
                handleAddServices={handleAddServices}
              />
            </PrivateRoute>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            {/* NotFound for random links */}
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
