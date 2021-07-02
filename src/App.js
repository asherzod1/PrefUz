import './App.css';
import HomeP from './pages/HomeP';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './styles/FooterPref.scss'
import './styles/doctorpage.scss'
import './styles/HomeC.scss'
import DoctorPage from "./pages/DoctorPage";
import AllJobsPage from './pages/AllJobsPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrefTests from "./pages/PrefTests";
import TestsNew from "./pages/TestsNew";
import TrainingP from "./pages/TrainingP";
import RezumeCreatPage from "./pages/RezumeCreatPage";
import CalcJobsP from './pages/CalcJobsP';
import TestResultP from "./pages/TestResultP";
import TappageForm from "./pages/TappageForm";
import TrainingElementsP from "./pages/TrainingElementsP";
import MyResumeP from './pages/MyResumeP';
import SaytAbout from "./pages/SaytAbout";
import SaytContentP from "./pages/SaytContentP";

function App() {

    const routes = [
        {
            path: '/', component: HomeP,

        },
        {
            path: '/alljobs', component: AllJobsPage,
        },
        {
            path: '/doc', component: DoctorPage,
        }
        ,

        {
            path: '/test', component: PrefTests,
        }
        ,

        {
            path: '/tests', component: TestsNew,
        },
        {
            path: '/training', component: TrainingP,
        },
        {
            path: '/testresult', component: TestResultP
        },
        {
            path: '/trainingelement', component: TrainingElementsP
        }
        ,
        {
            path: '/rezume', component: RezumeCreatPage,

        },
        {
            path: '/tabrezum', component: TappageForm,
        },
        {
            path: '/calcjobs', component: CalcJobsP
        },
        {
            path: '/myresume', component: MyResumeP
        }
        ,
        {
            path: '/saytabout', component: SaytAbout
        }
        ,
        {
            path: '/saytcontent', component: SaytContentP
        }
    ]
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {routes.map(item =>
                        <Route exact path={item.path} component={item.component}/>
                    )}

             <DoctorPage/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;