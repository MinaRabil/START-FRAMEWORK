import './App.css';

import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';



function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />, children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "portofolio",
          element: <Portofolio />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "*",
          element: <NotFound />
        },
      ]
    }])
  return <RouterProvider router={router}></RouterProvider>
    ;
}

export default App;
