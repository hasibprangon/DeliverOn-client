import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  offset: 120, 
  delay: 5, 
  duration: 1000, 
  easing: 'ease', 
  once: false, 
  mirror: true, 
  anchorPlacement: 'top-bottom', 

});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='fontUrbanist'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
