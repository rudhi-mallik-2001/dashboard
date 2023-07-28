import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AddContact from './pages/AddContact';
import { ToastContainer } from 'react-toastify';
import AllContacts from './pages/AllContacts';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/contacts" element={<AllContacts />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
