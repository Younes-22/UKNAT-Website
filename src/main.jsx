import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// 1. Import your main layout and page components
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';
import Volunteer from './pages/Volunteer.jsx';
// ... import other pages as needed

import './css/index.css'; // Your main css file

// 2. Define your application's routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The main App component will act as the layout
    // Add an errorElement here for better error handling (optional but good practice)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // ... add other page routes here
    ],
  },
]);

// 3. Render the RouterProvider instead of your App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);