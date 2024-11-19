import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./views/NotFound";
import Sales from "./views/Sales";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/dashboard";
import GuestLayout from "./components/GuestLayout";
import MitsubishiJakartaPusat from "./views/Mitsubishi";
import MitsubishiListMobil from "./views/MitsubishiListMobil";
import MitsubishiDaftarHarga from "./views/MitsubishiDaftarHarga";
import MitsubishiSimulasi from "./views/MitsubishiSimulasi";
import Contact from "./views/MitsubishiContact";

const router = createBrowserRouter([


      {
        path: '/mitsubishi/dashboard',
        element: <DefaultLayout/>,
        //children nya default
        children:  [
          {
            path: 'mitsubishi/Nursyifa/Dashboard',
            element: <Dashboard />
        },

        ]
    },

  {
    path: '',
    element: <Navigate to="/mitsubishi/" replace />
  },
  {
    path: '/mitsubishi',
    element: <MitsubishiJakartaPusat />
  },
  {
    path: 'mitsubishi/Sales',
    element: <Sales />
  },
  {
    path: 'mitsubishi/ListMobil',
    element: <MitsubishiListMobil />
  },
  {
    path: 'mitsubishi/DaftarHarga',
    element: <MitsubishiDaftarHarga />
  },
  {
    path: 'mitsubishi/SimulasiKredit',
    element: <MitsubishiSimulasi />
  },
  {
    path: 'mitsubishi/contact',
    element: <Contact />
  },


  {
    path: '/',
    element: <GuestLayout/>,
    children: [

      {
        path: 'mitsubishi/Login',
        element: <Login />
      },

    ]
},
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
