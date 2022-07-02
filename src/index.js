import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import {QueryClientProvider, QueryClient} from "react-query"

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient= new QueryClient()
root.render(
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthProvider>
     
 <App/>

    </AuthProvider>
   
    </BrowserRouter>
     </QueryClientProvider>
  

 
   
 
);

