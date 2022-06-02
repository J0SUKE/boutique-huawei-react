import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ScrollToTop()
{
	let location = useLocation();
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        if (location.pathname=="/laptops/") 
        {
        document.querySelector("html").style.scrollBehavior = "smooth";
        }
        else
        {
        document.querySelector("html").style.scrollBehavior = "auto";
        }
  },[location])

  return <React.Fragment />;
}