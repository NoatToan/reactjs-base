import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from './screens/login/Login';
import { SnackbarProvider } from 'notistack';
import { Home } from './screens/home/Home';
import { store } from './store';
import { Provider } from 'react-redux';
import { Header } from './layouts/Header';

function App(props: any) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <div className={'content'} role={'content'}>
            <SnackbarProvider maxSnack={3}>
              <Routes>
                <Route key={'INDEX'} path='/' element={<Home {...props} />} />
                <Route
                  key={'LOGIN'}
                  path='/login'
                  element={<Login {...props} />}
                />
              </Routes>
            </SnackbarProvider>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
