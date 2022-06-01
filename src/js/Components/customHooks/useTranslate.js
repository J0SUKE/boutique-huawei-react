import React from "react";
import { useEffect,useRef } from "react";

export default function useTranslate() {
    const lastImg = useRef();

    function handleScroll() {
      if (lastImg.current) 
        {
          const top = Math.abs(lastImg.current.parentNode.getBoundingClientRect().top);
          const bottom = Math.abs(lastImg.current.parentNode.getBoundingClientRect().bottom);
          const {scrollTop,clientHeight} = document.documentElement;
          
          if (top<clientHeight) {;
            lastImg.current.style.transform = `translateY(${(((top+bottom)/10))}px)`;  
          }
          else
          {
            lastImg.current.style.transform = `translateY(${(((clientHeight)/10))}px)`;  
          }
        }
    }
  
    handleScroll();
  
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
    },[]) 
  
    return lastImg;
  
  
  }