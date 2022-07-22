import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from './screens/login/Login';
import { SnackbarProvider } from 'notistack';
import { AppContext } from './context/AppContext';
import { Home } from './screens/home/Home';

function App(props: any) {
  const [appData, setAppData] = useState({});

  return (
    <AppContext.Provider
      value={{
        contextData: appData,
        setGlobalContext: (data) => {
          setAppData({ ...appData, ...data });
        },
      }}
    >
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <div className={'app--nav-bar'}>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='login'>Login</Link>
                </li>
              </ul>
            </div>
          </header>

          <div className={'content'} role={'content'}>
            <AppContext.Consumer>
              {(props) => {
                return (
                  <SnackbarProvider maxSnack={3}>
                    <Routes>
                      <Route
                        key={'INDEX'}
                        path='/'
                        element={<Home {...props} />}
                      />
                      <Route
                        key={'LOGIN'}
                        path='/login'
                        element={<Login {...props} />}
                      />
                    </Routes>
                  </SnackbarProvider>
                );
              }}
            </AppContext.Consumer>
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
