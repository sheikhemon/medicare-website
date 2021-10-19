import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PageError from './Pages/404/PageError';
import About from './Pages/About/About';
import Support from './Pages/Support/Support';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purschase/Purchase';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SignIn from './Pages/Login/SignIn';
function App() {
  return (
    <div className="App">
      {/* ==========Auth Context========== */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>

            {/* ============Private Route============  */}
            <PrivateRoute path="/purchase/:Id">
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path="/support">
              <Support></Support>
            </PrivateRoute>

            {/* ========404 page=========== */}
            <Route path="*">
              <PageError></PageError>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
