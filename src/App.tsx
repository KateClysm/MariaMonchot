import React from 'react';

//Ruteo
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

//Componentes y Secciones
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

//Estilos
import './styles/main.scss'


const App: React.FC = () => {

  //Layout Base
  const Layout = () => {
    return (
      <> 
        <Nav />
        <Outlet />
        <Footer/>
      </>
    );
  };
 
  //Ruteo del Outlet
  const router = createBrowserRouter([
    {
      path: '/mariamonchot/', 
      element: <Layout />,
      children: [
        {
          path: '/mariamonchot/',
          element: 
            <>
              <About/>
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