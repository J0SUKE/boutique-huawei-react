import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    
    const [vitrine1Data,setvitrine1Data] = useState([]);

    useEffect(()=>{
      let data = [{},{},{},{},{},{}];
      
      // list des produits :
      // smartwatches 4 6 , smartphones 0 1 2 , laptops 6
      fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartwatches.json")
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[5]
      })
    },[])
  
    return(
      <>
        <div className="banner hero_banner">

        </div>
        <ul className="vitrine_grid vitrine_grid-1">
          <li className='vitrine1-item'>
            <div className="vitrine1-item__left">
              <h1><strong>HUAWEI</strong> WATCH FIT 2</h1>
              <p>
                Écran HUAWEI FullView de 1,74 pouceAppels Bluetooth
                Suivi d’un mode de vie sain
              </p>
              <span>à partir de</span>
              <h2>149,99 €</h2>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button>En savoir plus</button>
                <button>Acheter</button>
              </div>
            </div>
            <div className="vitrine1-item__right">
              <img src="images/products/smartWatches/home/4.png" alt="" />
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="banner middle-banner"></div>

        <ul className="vitrine_grid vitrine-grid-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </>
    )
}



export default Home