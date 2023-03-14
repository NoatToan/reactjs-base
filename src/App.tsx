import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './screens/login/Login';
import { SnackbarProvider } from 'notistack';
import { store } from './store';
import { Provider } from 'react-redux';
import { Header } from './layouts/Header';
import { imgReact } from './assets/images/images';
import { Suspense } from 'react';
import React from 'react';

const Home = React.lazy(() => import('./screens/home/Home'));
const About = React.lazy(() => import('./screens/about/about'));
const CurriculumVitae = React.lazy(
  () => import('./screens/curriculumVitae/curriculumVitae')
);

function App(props: any) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App' id='app'>
          <div>{`Env: ${process.env.name}`}</div>
          <Header />
          <img
            src={imgReact}
            style={{ height: '25px', width: '25px' }}
            alt='react-img'
          />
          <div className={'content'} role={'content'}>
            <SnackbarProvider maxSnack={3}>
              <Suspense fallback='Loading...'>
                <Routes>
                  <Route key={'INDEX'} path='/' element={<Home {...props} />} />
                  <Route
                    key={'LOGIN'}
                    path='/login'
                    element={<Login {...props} />}
                  />
                  <Route
                    key={'About'}
                    path='/about'
                    element={<About {...props} />}
                  />
                  <Route
                    key={'CV'}
                    path='/cv'
                    element={<CurriculumVitae {...props} />}
                  />
                </Routes>
              </Suspense>
            </SnackbarProvider>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
