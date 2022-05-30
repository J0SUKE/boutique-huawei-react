import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    
    const [vitrine1Data,setvitrine1Data] = useState([]);

    const img1 = useTranslate();
    const img2 = useTranslate();
    const img3 = useTranslate();
    const img4 = useTranslate();
    const img5 = useTranslate();
    const img6 = useTranslate();

    const imgs = [img1,img2,img3,img4,img5,img6];

    useEffect(()=>{
      let data = [{},{},{},{},{},{}];
      
      fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartwatches.json")
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[0] = resp[3];
        data[5] = resp[5];
      }).then(()=>{
        return fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/laptops.json")
      })
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[1] = resp[5];
      }).then(()=>{
        return fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartphone.json")
      })
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[2] = resp[0];
        data[3] = resp[1];
        data[4] = resp[2];
      }).then(()=>{
        setvitrine1Data(data);
      })
    },[])
  
    return(
      <div className='content'>
        <div className="banner hero_banner">

        </div>
        <ul className="vitrine_grid vitrine_grid-1">
          {
            vitrine1Data?.map((item,i)=>{
              return(
                <li className='vitrine1-item' key={item.name}>
                  <div className="vitrine1-item__left">
                    <h1>{item.name}</h1>
                    <p>{item.desc}</p>
                    <span>à partir de</span>
                    <h2>{item.price} €</h2>
                    <span>Ou payer en 4 fois</span>
                    <div className="btns">
                      <button>En savoir plus</button>
                      <button>Acheter</button>
                    </div>
                  </div>
                  <div className="vitrine1-item__right">
                    <img src={`images/products/${item.category}/home/${item.id}.png`} alt="" ref={imgs[i]}/>
                  </div>
                </li>
              )
            })
          }
          
        </ul>

        <div className="banner middle-banner"></div>

        <ul className="vitrine_grid vitrine-grid-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
    )
}

function useTranslate() {
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
      }
  }

  handleScroll();

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
  },[]) 

  return lastImg;


}



export default Home