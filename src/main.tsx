import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <div className='font-nunito flex justify-center items-center gradient-background h-screen w-screen mx-auto lg:px-0 px-[10px]'>
            <App />
        </div>
    </StrictMode>,
)
