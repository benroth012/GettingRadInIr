import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar';
import { AdminFooter } from './components/AdminFooter';
import { AdminNavigationBar } from './components/AdminNavigationBar';
import PatientHome from './components/PatientHome';
import AdminHome from './components/AdminHome';
import Login from './components/Login';
import PatientEducation from './components/PatientEducation';
import AdminPatientEducation from './components/AdminPatientEducation';
import PatientFAQ from './components/PatientFAQ';
import AdminFAQ from './components/AdminFAQ';
import ProviderDirectory from './components/ProviderDirectory';
import AdminProviderDirectory from './components/AdminProviderDirectory';
import ContactInformation from './components/ContactInformation';
import AdminContactInformation from './components/AdminContactInformation';
import Videos from './components/Videos';
import AdminVideos from './components/AdminVideos';
import { ImplantedPort } from './components/Education/ImplantedPort';
import { TACE } from './components/Education/TACE';
import { AfterTACE } from './components/Education/AfterTACE';
import { NephrostomyCatheter } from './components/Education/NephrostomyCatheter'
import { FilterRemovalHome } from './components/Education/FilterRemovalHome'
import { FilterPlacementHome } from './components/Education/FilterPlacementHome'
import { FilterRemovalBefore } from './components/Education/FilterRemovalBefore'
import { FilterPlacementBefore } from './components/Education/FilterPlacementBefore'
import { BiliaryDrainCare } from './components/Education/BiliaryDrainCare'
import { TunneledCVC } from './components/Education/TunneledCVC'
import { GeneralPleurX } from './components/Education/GeneralPleurX'
import { PleurXHome } from './components/Education/PleurXHome'
import { PleurXFAQ } from './components/Education/PleurXFAQ'
import './App.css';

// DEPLOYMENT OPTION
window.apilink = "https://hidden-island-85538.herokuapp.com"
window.currentlink = "https://gentle-retreat-02796.herokuapp.com"

// LOCAL OPTION
//window.apilink = "http://localhost:8080"
//window.currentlink = "http://localhost:3000"

const PatientRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <NavigationBar/>
      <Component {...props}/>
      < Footer/>
    </div>
  )}/>
)

const AdminRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <AdminNavigationBar/>
      <Component {...props}/>
      <AdminFooter/>
    </div>
  )}/>
)

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Switch>
              <PatientRoute exact path="/" component={PatientHome} />
              <Route exact path="/adminlogin" component={Login} />
              <AdminRoute exact path="/adminhome=4YTiwH60TL" component={AdminHome} />
              <AdminRoute exact path="/adminvideos=ycrCjBDQCN" component={AdminVideos} />
              <AdminRoute exact path="/adminproviderdirectory=sGw8bmlEn8" component={AdminProviderDirectory} />
              <AdminRoute exact path="/admincontactinformation=5UnAc6yzMP" component={AdminContactInformation} />
              <AdminRoute exact path="/adminpatienteducation=cyRWLsfksP" component={AdminPatientEducation} />
              <AdminRoute exact path="/adminfaq=gPilcl17WF" component={AdminFAQ} />
              <PatientRoute exact path="/patienthome" component={PatientHome} />
              <PatientRoute exact path="/providerdirectory" component={ProviderDirectory} />
              <PatientRoute exact path="/contactinformation" component={ContactInformation} />
              <PatientRoute exact path="/videos" component={Videos} />
              <PatientRoute exact path="/patienteducation" component={PatientEducation} />
              <PatientRoute exact path="/faq" component={PatientFAQ} />
              <PatientRoute exact path="/implantedport" component={ImplantedPort} />
              <PatientRoute exact path="/tace" component={TACE} />
              <PatientRoute exact path="/aftertace" component={AfterTACE} />
              <PatientRoute exact path="/nephrostomycatheter" component={NephrostomyCatheter} />
              <PatientRoute exact path="/filterremovalhome" component={FilterRemovalHome} />
              <PatientRoute exact path="/filterplacementhome" component={FilterPlacementHome} />
              <PatientRoute exact path="/filterremovalbefore" component={FilterRemovalBefore} />
              <PatientRoute exact path="/filterplacementbefore" component={FilterPlacementBefore} />
              <PatientRoute exact path="/biliarydraincare" component={BiliaryDrainCare} />
              <PatientRoute exact path="/tunneledcvc" component={TunneledCVC} />
              <PatientRoute exact path="/generalpleurx" component={GeneralPleurX} />
              <PatientRoute exact path="/pleurxhome" component={PleurXHome} />
              <PatientRoute exact path="/pleurxfaq" component={PleurXFAQ} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
