import { Route, Switch, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
// import backHome from './images/home/background-home-desktop.jpg';

function App() {
    const path = useLocation().pathname;
    const location = path.split('/')[1];

  return (
    <>
        <div className={"app bg_" + location}>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/destination">
                <Destination />
              </Route>
              <Route path="/crew">
                <Crew />
              </Route>
              <Route exact path="/technology">
                <Technology />
              </Route>
            </Switch>
          </div>
        </div>
    </>
  );
}

export default App;
