import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Header from './components/header';
import Register from './components/register';
import { UserProvider } from './components/userContext';
import Login from './components/login';
import Home from './components/home';
import Notifications from './components/notifications';

function App() {
  return (
    <React.StrictMode>
        <Router>
            <UserProvider>
                <Header />
                <Routes>
                   <Route path='/' element={<Home />} />
                   <Route path='/Register' element={<Register />} />
                   <Route path='/Login' element={<Login />} />
                   <Route path='/notifications' element={<Notifications />} />
                </Routes>
            </UserProvider>
        </Router>
    </React.StrictMode>
  );
}

export default App;
