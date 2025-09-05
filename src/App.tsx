import React from 'react';

//Ruteo
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

//Componentes y Secciones
import Nav from './components/nav/Nav';
import About from './sections/About/About';
//import AllProjects from './pages/allprojects/AllProjects';

//Estilos
import './styles/main.scss'


const App: React.FC = () => {

  //Layout Base
  const Layout = () => {
    return (
      <> 
        <Nav />
        <Outlet />
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