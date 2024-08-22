import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";

const queryCLient = new QueryClient(); //react-query

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryCLient}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </QueryClientProvider>
)
