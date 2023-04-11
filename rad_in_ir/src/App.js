import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from './components/Footer';
import {NavigationBar} from './components/NavigationBar';
import {AdminFooter} from './components/AdminFooter';
import {AdminNavigationBar} from './components/AdminNavigationBar';
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
import {ImplantedPort} from './components/Education/ImplantedPort';
import {TACE} from './components/Education/TACE';
import {AfterTACE} from './components/Education/AfterTACE';
import {NephrostomyCatheter} from './components/Education/NephrostomyCatheter'
import {FilterRemovalHome} from './components/Education/FilterRemovalHome'
import {FilterPlacementHome} from './components/Education/FilterPlacementHome'
import {FilterRemovalBefore} from './components/Education/FilterRemovalBefore'
import {FilterPlacementBefore} from './components/Education/FilterPlacementBefore'
import {BiliaryDrainCare} from './components/Education/BiliaryDrainCare'
import {TunneledCVC} from './components/Education/TunneledCVC'
import {GeneralPleurX} from './components/Education/GeneralPleurX'
import {PleurXHome} from './components/Education/PleurXHome'
import {PleurXFAQ} from './components/Education/PleurXFAQ'
import './App.css';

// DEPLOYMENT OPTION
//window.apilink = "https://hidden-island-85538.herokuapp.com"
//window.currentlink = "https://gentle-retreat-02796.herokuapp.com"

// LOCAL OPTION
window.apilink = "http://localhost:8080"
window.currentlink = "http://localhost:3000"



function App({callback}) {
    return (
        <Router >
            <NavigationBar />
                    <Routes>
                        <Route ref ={callback} path="/" element={<PatientHome />}/>
                        <Route exact path="/adminlogin" element={<Login/>}/>
                        <Route exact path="/adminhome=4YTiwH60TL" element={<AdminHome/>}/>
                        <Route exact path="/adminvideos=ycrCjBDQCN" element={<AdminVideos/>}/>
                        <Route exact path="/adminproviderdirectory=sGw8bmlEn8" element={<AdminProviderDirectory/>}/>
                        <Route exact path="/admincontactinformation=5UnAc6yzMP"
                                    element={<AdminContactInformation/>}/>
                        <Route exact path="/adminpatienteducation=cyRWLsfksP" element={<AdminPatientEducation/>}/>
                        <Route exact path="/adminfaq=gPilcl17WF" element={<AdminFAQ/>}/>
                        <Route exact path="/patienthome" element={<PatientHome/>}/>
                        <Route exact path="/providerdirectory" element={<ProviderDirectory/>}/>
                        <Route exact path="/contactinformation" element={<ContactInformation/>}/>
                        <Route exact path="/videos" element={<Videos/>}/>
                        <Route exact path="/patienteducation" element={<PatientEducation/>}/>
                        <Route exact path="/faq" element={<PatientFAQ/>}/>
                        <Route exact path="/implantedport" element={<ImplantedPort/>}/>
                        <Route exact path="/tace" element={<TACE/>}/>
                        <Route exact path="/aftertace" element={<AfterTACE/>}/>
                        <Route exact path="/nephrostomycatheter" element={<NephrostomyCatheter/>}/>
                        <Route exact path="/filterremovalhome" element={<FilterRemovalHome/>}/>
                        <Route exact path="/filterplacementhome" element={<FilterPlacementHome/>}/>
                        <Route exact path="/filterremovalbefore" element={<FilterRemovalBefore/>}/>
                        <Route exact path="/filterplacementbefore" element={<FilterPlacementBefore/>}/>
                        <Route exact path="/biliarydraincare" element={<BiliaryDrainCare/>}/>
                        <Route exact path="/tunneledcvc" element={<TunneledCVC/>}/>
                        <Route exact path="/generalpleurx" element={<GeneralPleurX/>}/>
                        <Route exact path="/pleurxhome" element={<PleurXHome/>}/>
                        <Route exact path="/pleurxfaq" element={<PleurXFAQ/>}/>
                    </Routes>
                    <Footer/>
                </Router>
    );
}

export default App;
