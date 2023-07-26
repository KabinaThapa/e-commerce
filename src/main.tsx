import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from 'react-router-dom'
import { router } from './routes/router.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.tsx';
import {ApiProvider}from'@reduxjs/toolkit/query/react'
import { fetchapi } from './features/productSlice.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={fetchapi}>
        
    <RouterProvider router={router}/>
   
    </ApiProvider>
    </Provider>
   
  </React.StrictMode>,
)
