import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeP from './pages/HomeP';
import DoctorPage from "./pages/DoctorPage";
import AllJobsPage from './pages/AllJobsPage';
import './styles/style.scss'
import './styles/FooterPref.scss'
import './styles/doctorpage.scss'
import './styles/HomeC.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

    const routes = [
        {
            path: '/', component: HomeP,

        },
        {
          path:'/alljobs', component: AllJobsPage,
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
