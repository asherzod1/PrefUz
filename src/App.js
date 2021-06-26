import './App.css';
import HomeP from './pages/HomeP';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import './styles/FooterPref.scss'
function App() {

  const routes = [
    {
      path: '/', component: HomeP,
    }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(item =>
            <Route exact path={item.path} component={item.component} />
            )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
