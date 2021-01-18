import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './Layouts/Default';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Layout>
      <Home />
    </Layout>
  },
  {
    path: '/products',
    main: () => <Layout>
      <Products />
    </Layout>
  },
  {
    path: '/contact',
    main: () => <Layout>
      <Contact />
    </Layout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route 
      path={route.path}
      exact={route.exact}
      key = {index}
    >
      {route.main}
    </Route>
  })
  return routeComponents;
}
 
function App() {

  return (
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
    </Router>
  );
}

export default App;
