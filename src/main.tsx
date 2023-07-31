import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from 'react-router-dom'
import { router } from './routes/router.tsx'
import { Provider } from 'react-redux'
import { store, persistor } from './app/store.tsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    
      
        <ToastContainer
        position='top-right'
        autoClose={3000}/>
    <RouterProvider router={router}/>
    
    </PersistGate>
    
    </Provider>
   
  </React.StrictMode>,
)
