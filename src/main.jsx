import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Form, Home, Resume } from './pages/index.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      <Route path='/resume' element={<Resume />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
