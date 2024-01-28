import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './index.css'
import { LanguageProvider } from "./contex/context.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	  <LanguageProvider>
		  <App />
	  </LanguageProvider>
  </React.StrictMode>,
)
