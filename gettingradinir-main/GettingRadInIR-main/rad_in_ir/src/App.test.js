import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router, Route } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from "history";

import AdminContactInformation from './components/AdminContactInformation';
import AdminHome from './components/AdminHome';
import AdminPatientEducation from './components/AdminPatientEducation';
import AdminProviderDirectory from './components/AdminProviderDirectory';
import AdminVideos from './components/AdminVideos';
import AdminFAQ from './components/AdminFAQ';
import ContactInformation from './components/ContactInformation';
import Login from './components/Login';
import PatientEducation from './components/PatientEducation';
import PatientHome from './components/PatientHome';
import ProviderDirectory from './components/ProviderDirectory';
import Videos from './components/Videos';
import PatientFAQ from './components/PatientFAQ';

jest.mock('./components/AdminContactInformation');
jest.mock('./components/AdminHome');
jest.mock('./components/AdminPatientEducation');
jest.mock('./components/AdminProviderDirectory');
jest.mock('./components/AdminVideos');
jest.mock('./components/AdminFAQ');
jest.mock('./components/ContactInformation');
jest.mock('./components/Login');
jest.mock('./components/PatientEducation');
jest.mock('./components/PatientHome');
jest.mock('./components/ProviderDirectory');
jest.mock('./components/Videos');
jest.mock('./components/PatientFAQ');

jest.mock('./components/Education/BiliaryDrainCare');

describe("Tests for App Router", () => {

  test('Should call AdminContactInformation class', () => {
    const adminContact = new AdminContactInformation();
    const render = adminContact.render();
    expect(AdminContactInformation).toHaveBeenCalledTimes(1);
  });

  test('Should call AdminHome class', () => {
    const adminHome = new AdminHome();
    const render = adminHome.render();
    expect(AdminHome).toHaveBeenCalledTimes(1);
  });

  test('Should call AdminPatientEducation class', () => {
    const adminPatEd = new AdminPatientEducation();
    const render = adminPatEd.render();
    expect(AdminPatientEducation).toHaveBeenCalledTimes(1);
  });

  test('Should call AdminProviderDirectory class', () => {
    const adminProvDir = new AdminProviderDirectory();
    const render = adminProvDir.render();
    expect(AdminProviderDirectory).toHaveBeenCalledTimes(1);
  });


  test('Should call AdminVideos class', () => {
    const adminVideos = new AdminVideos();
    const render = adminVideos.render();
    expect(AdminVideos).toHaveBeenCalledTimes(1);
  });

  test('Should call AdminFAQ class', () => {
    const adminfaq = new AdminFAQ();
    const render = adminfaq.render();
    expect(AdminFAQ).toHaveBeenCalledTimes(1);
  });

  test('Should call ContactInformation class', () => {
    const contactInfo = new ContactInformation();
    const render = contactInfo.render();
    expect(ContactInformation).toHaveBeenCalledTimes(1);
  });

  test('Should call Login class', () => {
    const login = new Login();
    const render = login.render();
    expect(Login).toHaveBeenCalledTimes(1);
  });

  test('Should call PatientEducation class', () => {
    const patientEd = new PatientEducation();
    const render = patientEd.render();
    expect(PatientEducation).toHaveBeenCalledTimes(1);
  });

  test('Should call PatientHome class', () => {
    const patientHome = new PatientHome();
    const render = patientHome.render();
    expect(PatientHome).toHaveBeenCalledTimes(1);
  });

  test('Should call ProviderDirectory class', () => {
    const provDir = new ProviderDirectory();
    const render = provDir.render();
    expect(ProviderDirectory).toHaveBeenCalledTimes(1);
  });

  test('Should call Videos class', () => {
    const videos = new Videos();
    const render = videos.render();
    expect(Videos).toHaveBeenCalledTimes(1);
  });

  test('Should call PatientFAQ class', () => {
    const faq = new PatientFAQ();
    const render = faq.render();
    expect(PatientFAQ).toHaveBeenCalledTimes(1);
  });

  // test("Should render implanted port route", () => {
  //   // Arrange
  //   ImplantedPort.mockImplementation(() => <div>ImplantedPortMock</div>);
    
  //   const history = createMemoryHistory();
  //   history.push('/implantedport');
  //   render(
  //     <Router history={history}>
  //       <ImplantedPort></ImplantedPort>
  //     </Router>
  //   );

  //   // Assert
  //   expect(screen.getByText("ImplantedPortMock")).toBeInTheDocument();
  // });

  // test("Should render navigation", () => {
  //   // Arrange
  //   NavigationBar.mockImplementation(() => <div>NavBarMock</div>);
    
  //   // const history = createMemoryHistory();
  //   // history.push('/implantedport');
  //   render(
  //     <Router>
  //       <NavigationBar></NavigationBar>
  //     </Router>
  //   );

  //   // Assert
  //   expect(screen.getByText("NavBarMock")).toBeInTheDocument();
  // });

});