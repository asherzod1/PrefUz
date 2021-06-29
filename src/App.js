import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeP from './pages/HomeP';
import './styles/style.scss'
import './styles/FooterPref.scss'
import './styles/doctorpage.scss'
import './styles/HomeC.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorPage from "./pages/DoctorPage";
import AllJobsPage from './pages/AllJobsPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrefTests from "./pages/PrefTests";
import TestsNew from "./pages/TestsNew";
import TestResultP from './pages/TestResultP';
function App() {

    const routes = [
        {
            path: '/', component: HomeP,

        },
        {
          path:'/alljobs', component: AllJobsPage,
        },
        {
            path:'/doc', component:DoctorPage,
        }
        ,

        {
            path:'/test', component:PrefTests,
        }
        ,

        {
            path:'/tests', component:TestsNew,
        },
        {
            path:'/testresult', component: TestResultP,
        }
    ]
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {routes.map(item =>
                        <Route exact path={item.path} component={item.component}/>

                    )}

                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
