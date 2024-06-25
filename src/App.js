
import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PIM from "./components/Pim";
// import Contact from "./components/Contact";
import Job from "./components/JobDetails";
import Body from "./components/Body";
import Admin from "./components/Admin";
import AddEmployee from "./components/AddEmployee";
import EmployeeForm from "./components/EmployeeForm";
import UserDetail from "./components/UserDetails";
import ContactDetails from "./components/ContactDetails";
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      {!isLoggedIn ? (<Login onLogin={setIsLoggedIn} />) : (
        <div className='App'>
          <div className="flex flex-col">
            <Sidebar />
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/leave" element={<Admin />} />
            <Route path="/time" element={<Admin />} />
            <Route path="/myinfo" element={<Admin />} />
            <Route path="/pim" element={<PIM />}>
              <Route index element={<EmployeeForm />} />
              <Route path="user" element={
                <div className="flex flex-col md:flex-row bg-gray-100">
                  <div className="w-full h-[79vh] md:w-1/3 xl:w-1/4 bg-white">
                    <EmployeeForm />
                  </div>
                  <div className="flex-1 p-4">
                    <UserDetail />
                  </div>
                </div>
              } />
              <Route path="contact" element={
                <div className="flex flex-col md:flex-row bg-gray-100">
                  <div className="w-full h-[79vh] md:w-1/3 xl:w-1/4 bg-white">
                    <EmployeeForm />
                  </div>
                  <div className="flex-1 p-4">
                    <ContactDetails />
                  </div>
                </div>
              } />
              <Route path="job" element={
                <div className="flex flex-col md:flex-row bg-gray-100">
                  <div className="w-full h-[79vh] md:w-1/3 xl:w-1/4 bg-white">
                    <EmployeeForm />
                  </div>
                  <div className="flex-1 p-4">
                    <Job />
                  </div>
                </div>
              } />
              <Route path="addemployee" element={<AddEmployee />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}


export default App;
