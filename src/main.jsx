import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './provider/AuthProvider';
import ConversationProvider from './provider/ConversationProvider';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ConversationProvider>
          <RouterProvider router={router} />
        </ConversationProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
