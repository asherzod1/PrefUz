import './App.css';
import HomeP from './pages/HomeP';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './styles/style.scss'
import './styles/FooterPref.scss'
import './styles/doctorpage.scss'
import './styles/HomeC.scss'
import DoctorPage from "./pages/DoctorPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
                        <Route exact path={item.path} component={item.component}/>

                    )}
                    <Route exact path='/doc' component={DoctorPage}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
