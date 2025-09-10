import React from 'react';

//Ruteo
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

//Componentes y Pages
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import { LanguageProvider } from './contexts/LanguageContext';
//Estilos
import './styles/main.scss'
import Technologies from './pages/Technologies/Technologies';


const App: React.FC = () => {

  //Layout Base
  const Layout = () => {
    return (
      <LanguageProvider>
        <div className="site-root">
          <Nav />
          <main className="site-content">
            <Outlet />
          </main>
          <Contact id="contact"/>
          <Footer />
        </div>
      </LanguageProvider>
      
    );
  };
 
  //Ruteo del Outlet
  const router = createBrowserRouter([
    {
      path: '/MariaMonchot/', 
      element: <Layout />,
      children: [
        {
          path: '/MariaMonchot/',
          element: 
            <>
              <About id="about"/>
              <Technologies id="technologies"/>
              <Education id="education"/>
            </>
        },
        // {
        //   path: '/mariamonchot/allprojects',
        //   element: <AllProjects/>
        // }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;